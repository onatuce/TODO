# Todo App

Dette er en enkel todo-app laget med React og Vite.

Du kan:

- legge til nye oppgaver
- endre en oppgave
- slette én oppgave
- slette alle oppgaver
- se hvor mange oppgaver som ligger i lista

Easter egg = Det er også lagt inn en liten ekstra ting: når du har 10 oppgaver, kommer det en melding på skjermen.

## Hva appen gjør

- Du skriver inn en oppgave i feltet og trykker Add.
- Oppgaven legges til i lista.
- Du kan trykke på edit-ikonet for å endre teksten.
- Du kan trykke på delete-ikonet for å fjerne en oppgave.
- Du kan trykke på Slette alle for å tøme hele lista.

## Prosjektfiler

- [src/App.jsx](src/App.jsx) - hovedlogikken for todo-lista
- [src/components/TodoCreate.jsx](src/components/TodoCreate.jsx) - skjemaet for å legge til nye oppgaver
- [src/components/TodoList.tsx](src/components/TodoList.tsx) - viser alle oppgavene
- [src/components/Todo.tsx](src/components/Todo.tsx) - én enkelt todo med redigering og sletting

## Tech brukt

- React
- Vite
- JavaScript
- TypeScript i noen komponentfiler
- react-icons

## How to run

Installer pakkene:

```bash
npm install
```

Start appen:

```bash
npm run dev
```

Bygg prosjektet:

```bash
npm run build
```

## Notater

- Appen er holdt enkel med vilje.
- Lista lagres bare i minnet, så den nullstilles når du refresher siden.
- Koden er lett å bygge videre på hvis du vil legge til lagring, filter eller fullført status.
