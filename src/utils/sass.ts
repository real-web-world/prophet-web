import page404 from '@sass/common/page404.module.scss'
import index from '@sass/index/index.module.scss'
import client from '@sass/dev/client.module.scss'
import game from '@sass/index/game.module.scss'
import gameDetail from '@sass/index/gameDetail.module.scss'

export default {
  common: {
    page404,
  },
  index: {
    index,
    game,
    gameDetail,
  },
  dev: {
    client,
  }
}
