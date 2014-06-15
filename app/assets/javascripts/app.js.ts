/// <reference path="../typings/jquery/jquery.d.ts"/>

/// <reference path="../ts/clazz.js.ts"/>
/// <reference path="../ts/car.js.ts"/>

module Rails {

    export class Application {

        constructor() {
            console.log('Typescript ready.');
            this.display($('<p>use TypeScript.</p>'));
            this.loadClazz();
        }

        private display($el: JQuery) {
            $('#hero-content').append($el);
        }

        private loadClazz() {
            var clazz = new Clazz();
            console.log(clazz.hoge('ahya'));
        }

    }

    $(()=> {
        new Application();
    });

}
