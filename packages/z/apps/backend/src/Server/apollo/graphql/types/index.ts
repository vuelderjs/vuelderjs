import { mergeTypeDefs } from '@graphql-tools/merge'

import { types as userTypes } from "@vuelder.js/users-backend/graphql";

export default mergeTypeDefs([userTypes])