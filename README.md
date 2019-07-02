# Server Side Rendering (SSR)

This exercise helps you to create an Angular Application that supports Server Side Rendering by utilizing Angular Universe. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Tasks

1. Run the current application by `npm i && ng serve`.

2. Add Server-Side Rendering (SSR) to the application: 

```
ng add @nguniversal/express-engine --clientProject PROJECT_NAME
# Check the PROJECT_NAME in the angular.json.
```

3. Build the SSR application and run the node server to host it: 

```
npm run build:ssr && npm run serve:ssr
```

4. Render a `Date.now().toString();` somewhere on the page to check if the pre-rendering is done on the server or during buildtime. 

4. Change Network throttling to `Slow 3G` an check the result when clicking on the disclaimer button.

5. Install and configure `preboot` to replay the javascript actions, once the application is fully loaded: 

```
npm i preboot --save

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'foo' }),
    PrebootModule.withConfig({ appRoot: 'app-root' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
6. Extend the application by a simple `router-outlet` that shows two different pages. Introduce a simple navigation to both eager loaded pages.

7. Add a lazy loaded module to the route configuration. 

8. Register a token that has the value "SERVER" or "CLIENT" dependant where the application is running. 

9. Fetch some random data from an external service and render it: 

```
  product$: Observable<string>;

  constructor(private http: HttpClient) {
    this.product$ = 
        this.http.get("https://reqres.in/api/users/2")
            .pipe(map(v => JSON.stringify(v)));
  }

  <div>{{ product$ | async }}</div>
```
