# Kuf Skeleton loader

Simple component for rendering placeholder content.

# Install
```sh
$ npm install kuf-skeleton-loader -save
```

# Setup
You need to add `KufSkeletonLoaderModule` to your `app.module.ts`

```sh
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ...
        KufSkeletonLoaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```
After that, you can use the component in your templates and passing the Properties you want

```sh
<kuf-skeleton-loader [width]="'300px'" [height]="'20px'" [duration]="'1s'" [background]="'#eee'" [count]="20" radius></kuf-skeleton-loader>
```
### Properties

| Property | Default |  |
| ------ | ------ | ------ |
| width | 100% | Width of the skeleton can be px or %
| height | 20px | Height of the skeleton can be px or %
| background | #EFF1F6 | Background of the skeleton
| duration | 2s | Background animation duration
| count | 1 | Number of items
| radius | 4px | Border radius of the skeleton
| circle | 120px | 
