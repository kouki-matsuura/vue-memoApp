import CONSTANTS from '@/constants'
import { ADD, REMOVE, UPDATE_MILLION, UPDATE_PLATFORMS } from '@/store/modules/mutation-types'

export default {
    namespaced: true,
    state () {
        return {
            data: [
                { id: 1, title: 'ゼルダの伝説', description: '『ゼルダの伝説』（ゼルダのでんせつ、The Legend of Zelda）は、任天堂から発売されたゲームソフト。ゼルダの伝説シリーズの一作目にあたる。表記はパッケージやタイトル画面では『THE HYRULE FANTASY ゼルダの伝説』となっている。日本では昭和61年2月21日にファミリーコンピュータ ディスクシステム用として、日本国外のディスクシステムが発売されなかった地域ではロムカセットとして発売された。', platforms: ['FC'], million: true, releasedAt: new Date('1986-02-21') },
                { id: 2, title: 'リンクの冒険', description: '『リンクの冒険』（リンクのぼうけん、英題: Zelda II: The Adventure of Link）は、任天堂より昭和62年1月14日に発売されたファミリーコンピュータ ディスクシステム用アクションアドベンチャーゲーム。パッケージおよびタイトル画面では『THE LEGEND OF ZELDA 2 リンクの冒険』と表記され、テレビCMでは『ゼルダの伝説パート2 リンクの冒険』と紹介している。', platforms: ['FC'], million: true, releasedAt: new Date('1987-01-14') },
                { id: 3, title: 'ゼルダの伝説 神々のトライフォース', description: '『ゼルダの伝説 神々のトライフォース』（ゼルダのでんせつ かみがみのトライフォース）は、平成3年11月21日に任天堂から発売されたスーパーファミコン用ゲームソフト。ジャンルはアクションアドベンチャーゲーム。', platforms: ['SFC'], million: true, releasedAt: new Date('1991-11-21') },
                { id: 4, title: 'ゼルダの伝説 夢をみる島', description: '『ゼルダの伝説 夢をみる島』（ゼルダのでんせつ ゆめをみるしま、英題: The Legend of Zelda: Link\'s Awakening）は、任天堂から平成5年6月6日に発売されたゲームボーイ用アクションアドベンチャーゲーム。', platforms: ['GB'], million: false, releasedAt: new Date('1993-06-06') },
                { id: 5, title: 'ゼルダの伝説 時のオカリナ', description: '『ゼルダの伝説 時のオカリナ』（ゼルダのでんせつ ときのオカリナ、英題：The Legend of Zelda: Ocarina of Time）は、平成9年11月21日に任天堂より発売されたNINTENDO64（N64）用アクションアドベンチャーゲーム、アクションRPG。', platforms: ['64'], million: true, releasedAt: new Date('1998-11-21') },
                { id: 6, title: 'ゼルダの伝説 ムジュラの仮面', description: '『ゼルダの伝説 ムジュラの仮面』（ゼルダのでんせつ ムジュラのかめん、英題:The Legend of Zelda: Majora\'s Mask）は、任天堂より平成12年4月27日に発売されたNINTENDO64用3DアクションRPG。『ゼルダの伝説 時のオカリナ』の続編。', platforms: ['64'], million: false, releasedAt: new Date('2000-04-27') },
                { id: 7, title: 'ゼルダの伝説 ふしぎの木の実', description: '『ゼルダの伝説 ふしぎの木の実』（ゼルダのでんせつ ふしぎのきのみ）は、平成13年2月27日に任天堂から発売されたゲームボーイカラー用アクションアドベンチャーゲーム2作品の総称。『ゼルダの伝説 ふしぎの木の実 大地の章』（―だいちのしょう、英題:The Legend of Zelda: Oracle of Seasons）と『ゼルダの伝説 ふしぎの木の実 時空の章』（―じくうのしょう、英題:The Legend of Zelda: Oracle of Ages）が同時発売された。略称は「木の実」など。', platforms: ['GB'], million: false, releasedAt: new Date('2001-02-27') },
                { id: 8, title: 'ゼルダの伝説 風のタクト', description: '『ゼルダの伝説 風のタクト』（ゼルダのでんせつ かぜのタクト、英: The Legend of Zelda: The Wind Waker）は、平成14年12月13日に任天堂より発売されたニンテンドーゲームキューブ用アクションアドベンチャーゲームである。', platforms: ['GC'], million: false, releasedAt: new Date('2002-12-13') },
                { id: 9, title: 'もぎたてチンクルのばら色ルッピーランド', description: '『もぎたてチンクルのばら色ルッピーランド』（もぎたてチンクルのばらいろルッピーランド、Freshly-Picked Tingle\'s Rosy Rupeeland）は、平成18年9月2日に任天堂より発売されたニンテンドーDS用ソフト。', platforms: ['DS'], million: false, releasedAt: new Date('2006-09-02') },
                { id: 10, title: 'ゼルダの伝説 トワイライトプリンセス', description: '『ゼルダの伝説 トワイライトプリンセス』（ゼルダのでんせつ トワイライトプリンセス、英題:The Legend of Zelda: Twilight Princess）は、任天堂より発売された、Wii・ニンテンドーゲームキューブ用のアクションアドベンチャーゲーム。略称は「トワプリ」。', platforms: ['GC', 'Wii'], million: false, releasedAt: new Date('2006-12-02') },
                { id: 11, title: 'ゼルダの伝説 夢幻の砂時計', description: '『ゼルダの伝説 夢幻の砂時計』（ゼルダのでんせつ むげんのすなどけい、英題:The Legend of Zelda: Phantom Hourglass）は、任天堂開発・発売のニンテンドーDS専用ゲームソフト。略称は「夢砂」「夢幻」など。', platforms: ['DS'], million: false, releasedAt: new Date('2007-06-23') },
                { id: 12, title: 'ゼルダの伝説 大地の汽笛', description: '『ゼルダの伝説 大地の汽笛』（ゼルダのでんせつ だいちのきてき、英題:The Legend of Zelda: Spirit Tracks）は、任天堂から平成20年12月23日に発売されたニンテンドーDS用アクションアドベンチャーゲーム。略称は「汽笛」など。', platforms: ['DS'], million: false, releasedAt: new Date('2009-12-07') },
                { id: 13, title: 'ゼルダの伝説 スカイウォードソード', description: '『ゼルダの伝説 スカイウォードソード』（ゼルダのでんせつ スカイウォードソード、英題：The Legend of Zelda: Skyward Sword）は、任天堂より平成22年11月23日に発売されたWii用アクションアドベンチャーゲーム。2016年9月2日からはWii U用ダウンロードソフトとして配信されている。', platforms: ['Wii', 'Wii U'], million: false, releasedAt: new Date('2011-11-23') },
                { id: 14, title: 'ゼルダの伝説 神々のトライフォース2', description: '『ゼルダの伝説 神々のトライフォース2』（ゼルダのでんせつ かみがみのトライフォースツー、英題：The Legend of Zelda: A Link Between Worlds）は、平成25年12月26日に任天堂から発売されたニンテンドー3DS用アクションアドベンチャーゲーム。', platforms: ['3DS'], million: false, releasedAt: new Date('2013-12-26') },
                { id: 15, title: 'ゼルダの伝説 ブレス オブ ザ ワイルド', description: '『ゼルダの伝説 ブレス オブ ザ ワイルド』（ゼルダのでんせつ ブレス オブ ザ ワイルド、英題:The Legend of Zelda: Breath of the Wild）は、任天堂より平成29年3月3日に発売されたWii UおよびNintendo Switch用アクションアドベンチャーゲーム。', platforms: ['Wii U', 'Switch'], million: true, releasedAt: new Date('2017-03-03') }
            ],
            nextId: 16
        }
    },
    mutations: {
        [ADD] (state, payload) {
            payload.id = state.nextId
            state.data.push(payload)
            state.data.sort((a, b) => {
                return a.releasedAt.getTime() - b.releasedAt.getTime()
            })
            state.nextId++;
        },
        [REMOVE] (state, payload) {
            const index = state.data.findIndex(memo => memo.id === payload.id)
            if (index !== -1) {
                state.data.splice(index, 1)
            }
        },
        [UPDATE_MILLION] (state, payload) {
            const index = state.data.findIndex(memo => memo.id === payload.id)
            if (index !== -1) {
                state.data[index].million = !state.data[index].million
            }
        },
        [UPDATE_PLATFORMS] (state, payload) {
            const index = state.data.findIndex(memo => memo.id === payload.id)
            if (index !== -1) {
                let platforms = state.data[index].platforms
                if (platforms.includes(payload.platform)) {
                    platforms.splice(platforms.indexOf(payload.platform), 1) 
                }else {
                    platforms.push(payload.platform)
                }
            }
        }
    },
    getters: {
        all (state) {
            return state.data
        },
        byId (state) {
            return (_id) => {
                let memo = state.data.find(m => m.id === _id)
                if (memo) {
                    return memo
                }
                return CONSTANTS.ERROR_MEMO
            }
        }
    },
    actions: {
        addMemo ({ commit }, payload) {
            commit(ADD, payload)
        },
        deleteMemo ({ commit }, payload) {
            commit(REMOVE, payload)
        },
        updateMillion ({ commit }, payload) {
            commit(UPDATE_MILLION, payload)
        },
        updatePlatforms ({ commit }, payload) {
            commit(UPDATE_PLATFORMS, payload)
        }
    }
}