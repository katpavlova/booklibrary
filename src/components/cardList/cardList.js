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
        if (this.parentState.loading) {
            this.el.innerHTML = `
                <div class = "cardList__loader">
                <h3>Одно мгновение! Книги загружаются!</h3>
                 <span class="loader"></span>
                </div>
            `;
            return this.el;
        }

        const cardGrid = document.createElement('div');
        cardGrid.classList.add('cardGrid');
        this.el.append(cardGrid);
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render());
        }
        
        return this.el;
    }
}