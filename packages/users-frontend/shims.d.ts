declare module "*.vue" {
    import type { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module "*.gql" {
    const content: any;
    export default content;
}
declare module "*.graphql" {
const content: any;
export default content;
}