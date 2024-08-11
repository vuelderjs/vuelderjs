<template>
    <v-card variant="text">
        <v-card-title class="d-flex flex-row align-center" justify-start>
            <v-icon start>mdi-filter-outline</v-icon>Filtros
            <v-spacer></v-spacer>
        </v-card-title>
        <v-row class="ma-0 pa-0">
            <v-col cols="12" class="d-flex flex-row flex-wrap ga-4 py-0">
                <v-autocomplete
                    :items="roles.map(role => ({ title: role.name, value: role.id }))"
                    :modelValue="dataUsersManagement.filters.role"
                    @update:modelValue="dataUsersManagement.updateFilters({role: $event})"
                    style="width: auto; min-width: 200px;"
                    label="Rol"
                    prepend-inner-icon="mdi-security"
                ></v-autocomplete>
                <v-text-field
                    :modelValue="dataUsersManagement.filters.email"
                    @update:modelValue="dataUsersManagement.updateFilters({email: $event})"
                    style="width: auto; min-width: 200px;"
                    label="Email"
                    prepend-inner-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                    :modelValue="dataUsersManagement.filters.name"
                    @update:modelValue="dataUsersManagement.updateFilters({name: $event})"
                    style="width: auto; min-width: 200px;"
                    label="Nombre"
                    prepend-inner-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                    :modelValue="dataUsersManagement.filters.surname"
                    @update:modelValue="dataUsersManagement.updateFilters({surname: $event})"
                    style="width: auto; min-width: 200px;"
                    label="Apellido"
                    prepend-inner-icon="mdi-account"
                ></v-text-field>
                <v-switch
                    :modelValue="dataUsersManagement.filters.enable"
                    @update:modelValue="dataUsersManagement.updateFilters({enable: $event})"
                    label="Mostrar solo usuarios habilitados"
                    color="success"
                ></v-switch>
            </v-col>
            <v-col cols="12" class="d-flex flex-row flex-wrap ga-4 justify-end py-4">
                <v-btn color="primary" variant="text" size="small" @click="() => dataUsersManagement.cleanFilters()">Limpiar Filtros</v-btn>
                <v-btn color="primary" variant="elevated" size="small" @click="() => dataUsersManagement.fetchUsers()">Aplicar Filtros</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
    import DataUsersManagement from '../../../core/DataUsersManagement';

    const props = defineProps<{
        roles: { id: string, name: string, permissions: { id: string, name: string }}[],
        dataUsersManagement: DataUsersManagement
    }>()
</script>

<style scoped>

</style>