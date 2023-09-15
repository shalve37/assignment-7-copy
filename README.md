1. Three features of my project:
 
(a) The project is quite interactive because it shows error messages to the user when the user has exceeded the course credit hours limit or selects a course more than once.
(b) The project is divided into multiple components so the code is organized and can be used in the future efficiently.
(c) The project is decently responsive in smaller devices such as Tablets and Smartphones.

2. Discussing the state of my project:

    I used a total of four useState.

(a) cards: This first one is declared in the "Cards" component and this is used to catch the data fetched from the json file. After catching the data it is mapped (because the data is basically an array of objects and each object contains the data of an individual product or card) and sent to "Card" component to show the data.

(b) checklist: This is declared in the "App" component. When you click the select button on a card the event handler sends the card's data to App, and there is a if-else condition which checks if the card already exits in the checklist or not, if it does the card is not added to the checklist array (because one item can only be selected once) and shows a toast message on the web page. And if it doesn't exist, the setChecklist function adds the card to checklist and then the checklist is sent to "checkedItem" component which is used to show the title's of the cards which are selected.

(c) credits:  This is declared in the "App" component. When you click the select button on a card the event handler sends the card's credit to App, and there is a if-else condition which checks if the sum of the already existing credit and the new credit sent from the Card is less than or equal to 20. If it is, then the setCredits functions sets the total credit to "credits" and then the "credits" is sent to "Credits" component to show total credits on the web page. But if its not, then the selected card's credit is not added to the total credit hours and a toast message is shown on the web page.

(d) remainingCredits: This is declared in the "App" component and its initial value is 20. When you click the select button on a card the event handler sends the card's credit to App, and there is a if-else condition which checks if the subtraction of the already existing value (20, initially) and the credit sent from the card is more than or equal to 0. If it is equal to zero or more than zero, the setRemainingCredits function sets the subtraction  as "remainingCredits" and then the "remainingCredits" is sent to "RemainingCredits" component to visually show how many credit hours is left on the web page. But if it is less than zero, then the credit sent from the card is not subtracted from the remainingCredit and a toast message is shown on the web page.
