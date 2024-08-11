import { reactive } from 'vue'
import DataUsersManagement from '../../core/DataUsersManagement'

export const useDataUsersManagement = () => reactive(new DataUsersManagement()) as DataUsersManagement