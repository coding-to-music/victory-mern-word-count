import * as React from 'react'
import { useStyletron } from 'baseui'
import { Display4, H1, H3, Label2, Label4 } from 'baseui/typography'
import { Block } from 'baseui/block'
import { SIZE, StyledSpinnerNext } from 'baseui/spinner'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'
import { Filter } from 'baseui/icon'
import { formatRelative } from 'date-fns'

import {
    VictoryAxis,
    VictoryBrushContainer,
    VictoryChart,
    VictoryLine,
    VictoryScatter,
} from 'victory'
import { NewsType } from '../models/news.model'

const calcWordFreq = (
    statistics: NewsType[],
    startTime: Date | number,
    endTime: Date | number,
    slice?: number,
    alphaSort?: boolean
) => {
    let start = new Date(startTime)
    let end = new Date(endTime)

    let stats = statistics
        .reduce((acc: NewsType['stats'][], stat) => {
            let currTime = new Date(stat.dateTime)
            if (start <= currTime && currTime <= end) acc.push(stat.stats)
            return acc
        }, [])
        .flat()
        .reduce((acc: NewsType['stats'], stat) => {
            let count = acc.find((k) => k.word === stat.word)
            if (count) {
                ++count.frequency
            } else {
                acc.push({ word: stat.word, frequency: 1 })
            }
            return acc
        }, [])
        .sort((a, b) => a.frequency - b.frequency)

    // number of words to be returned
    if (slice) stats = stats.slice(slice)
    // alphaSort remaining array in alphabetical order
    if (alphaSort)
        stats = stats.sort((a, b) => {
            if (a.word < b.word) return -1
            if (a.word > b.word) return 1
            return 0
        })

    return stats
}

const Index = () => {
    const [isLoaded, setIsLoaded] = React.useState<{
        isLoaded: boolean
        error: any
    }>({ isLoaded: false, error: null })
    const [news, setNews] = React.useState<NewsType[]>([])

    let newsParams = {
        pageSize: 90,
        statSize: 15,
    }

    React.useEffect(() => {
        fetch(
            `api/news?pageSize=${newsParams.pageSize}&statSize=${newsParams.statSize}`
        )
            .then((res) => {
                return res.json()
            })
            .then(
                (newsData: NewsType[]) => {
                    setIsLoaded({ ...isLoaded, isLoaded: true })
                    setNews(newsData)
                },
                (error) => {
                    setIsLoaded({ isLoaded: true, error: error })
                }
            )
    }, [])

    return (
        <Block>
            <H1 color={'accent'}>Word Vis: Charting test</H1>
            <Block width={'80%'}>
                <H3>Word X frequency chart</H3>
                <br />

                {isLoaded.error ? (
                    <Display4 color={'negative'}>{isLoaded.error}</Display4>
                ) : !isLoaded.isLoaded ? (
                    <StyledSpinnerNext $size={SIZE.large} />
                ) : (
                    <WordVis news={news} />
                )}
            </Block>
        </Block>
    )
}

export default Index

export const WordVis = ({ news }: { news: NewsType[] }) => {
    const [selected, setSelected] = React.useState<{
        x: [Date, Date] | [number, number]
    }>({
        x: [
            new Date().setHours(new Date().getHours() - 8),
            new Date().setHours(new Date().getHours() - 1),
        ],
    })
    const [alphaSort, setAlphaSort] = React.useState(true)

    const isTimeRange = (time: Date) => {
        return (
            new Date(selected.x[0]) < new Date(time) &&
            new Date(time) < new Date(selected.x[1])
        )
    }

    let data = calcWordFreq(
        news,
        new Date(selected.x[0]),
        new Date(selected.x[1]),
        -20,
        alphaSort
    )

    const [css] = useStyletron()

    return (
        <div>
            {selected.x ? (
                <Block>
                    <FlexGrid
                        flexGridColumnCount={2}
                        justifyContent="space-between"
                    >
                        <FlexGridItem>
                            <Label2 paddingLeft="20px">
                                <span className={css({ color: '#A069D0' })}>
                                    {' '}
                                    {formatRelative(selected.x[0], new Date())}
                                </span>{' '}
                                to{' '}
                                <span className={css({ color: '#FF6C9D' })}>
                                    {formatRelative(selected.x[1], new Date())}
                                </span>
                            </Label2>
                        </FlexGridItem>
                        <FlexGridItem>
                            <Button
                                onClick={() => setAlphaSort(!alphaSort)}
                                $style={{
                                    backgroundColor: '#FF6C9D',
                                    float: 'right',
                                }}
                            >
                                <Filter size={20} />
                            </Button>
                        </FlexGridItem>
                    </FlexGrid>

                    <VictoryChart domainPadding={30} width={1000}>
                        <VictoryLine
                            x="word"
                            y="frequency"
                            interpolation="cardinal"
                            data={data}
                            labels={({ datum }) => `${datum.frequency}`}
                            style={{
                                data: {
                                    stroke: '#FF6C9D',
                                    strokeWidth: 5,
                                },
                                labels: {
                                    fill: '#FF6C9D',
                                },
                            }}
                        />
                        <VictoryScatter
                            x="word"
                            y="frequency"
                            data={data}
                            size={5}
                            style={{
                                data: {
                                    fill: '#fff',
                                    stroke: '#FF6C9D',
                                    strokeWidth: 3,
                                },
                            }}
                        />

                        <VictoryAxis
                            style={{
                                axis: { opacity: 0 },
                                tickLabels: {
                                    angle: '-90',
                                    transform: 'translate(-16 0)',
                                },
                                grid: { stroke: '#A9BEF2', opacity: 0.48 },
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                axis: {
                                    stroke: '#fff',
                                    opacity: 0,
                                    fontWeight: 100,
                                },
                                tickLabels: {
                                    padding: 15,
                                    fill: '#A069D0',
                                    fontWeight: 100,
                                },
                            }}
                        />
                    </VictoryChart>

                    <br />
                    <FlexGrid
                        flexGridColumnCount={2}
                        justifyContent="space-between"
                        padding="0px 50px"
                    >
                        <FlexGridItem>
                            <Label4 color="#A069D0">Yesterday</Label4>
                        </FlexGridItem>
                        <FlexGridItem>
                            <Label4
                                $style={{ textAlign: 'end' }}
                                color="#FF6C9D"
                            >
                                Today
                            </Label4>
                        </FlexGridItem>
                    </FlexGrid>
                </Block>
            ) : (
                'pending'
            )}

            <br />
            {/* Scrub bar */}
            <VictoryChart
                width={1000}
                height={100}
                scale={{ x: 'time' }}
                padding={{ top: 0, left: 50, right: 50, bottom: 60 }}
                containerComponent={
                    <VictoryBrushContainer
                        brushDimension="x"
                        brushDomain={selected}
                        onBrushDomainChange={setSelected}
                        brushStyle={{
                            fill: 'url(#myGradient)',
                            // @ts-ignore
                            rx: 12,
                            height: 24,
                        }}
                    />
                }
                domainPadding={30}
            >
                <VictoryAxis
                    tickValues={Array.apply(null, Array(24)).map(
                        (value, index) => {
                            let t = new Date()
                            t.setDate(t.getDate() - 1)
                            t.setHours(t.getHours() + index + 1)
                            return t
                        }
                    )}
                    offsetY={87}
                    tickFormat={(x) => new Date(x).getHours()}
                    style={{
                        axis: {
                            stroke: '#FF8A85',
                            opacity: 0.5,
                            strokeWidth: 6,
                        },
                        tickLabels: {
                            padding: 25,
                            fill: ({ tick }) =>
                                isTimeRange(tick) ? '#A069D0' : '#464444',
                            fontWeight: ({ tick }) =>
                                isTimeRange(tick) ? '600' : '100',
                        },
                    }}
                />
            </VictoryChart>
            {/*svg gradient*/}
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="0%" stopColor="#A069D0" />
                        <stop offset="100%" stopColor="#FF6C9F" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
