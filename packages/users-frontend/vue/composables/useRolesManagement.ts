import { reactive } from 'vue'
import RolesManagement from '../../core/RolesManagement'

export const useRolesManagement = () => reactive(new RolesManagement())