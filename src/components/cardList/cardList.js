import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import './cardList.css';

export class CardList extends DivComponent{
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }


    render() {
        this.el.classList.add('cardList');
        if (this.parentState.loading) {
            this.el.innerHTML = `
                <div class = "cardList__loader">
                <h3>Одно мгновение! Книги загружаются!</h3>
                 <span class="loader"></span>
                </div>
            `;
            return this.el;
        }
        this.el.innerHTML = `
            <h1>
            Найдено книг – ${this.parentState.numFound}
            </h1>
        `
        for (const card of this.parentState.list) {
            this.el.append(new Card(this.appState, card).render());
        }
        
        return this.el;
    }
}