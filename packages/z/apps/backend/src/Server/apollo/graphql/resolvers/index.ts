import { mergeResolvers } from '@graphql-tools/merge'

import { resolvers as userResolvers } from '@vuelder.js/users-backend/graphql'

export default mergeResolvers([userResolvers])