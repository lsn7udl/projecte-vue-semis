# Documentació del Projecte

## La temàtica i una breu descripció de l’aplicació

Aquesta aplicació web és un catàleg interactiu de gestió i consulta de llibres desenvolupat amb Vue 3 (Vite). Permet als usuaris consultar en temps real un llistat de llibres emmagatzemat a Cloud Firestore i llegir una segona secció anomenada "Sobre nosaltres". 

---

## Els passos per instal·lar les dependències, executar-la localment, generar la versió de producció i desplegar-la

1. Instal·lar les dependències:
npm install

2. Executar-la localment:
npm run dev

3. Generar la versió de producció:
npm run build

4. Desplegar-la a Firebase Hosting:
npx firebase deploy

---

## La relació dels components propis i la seva funció

- Navbar.vue: Component que gestiona la barra de navegació superior. Utilitza RouterLink per permetre el desplaçament entre vistes sense recarregar la pàgina.
- LlibreCard.vue: Component visual encarregat de mostrar la informació d'un llibre individualitzat en format de targeta.
- Footer.vue: Component encarregat del peu de pàgina informatiu i institucional de l'aplicació.

---

## Un exemple concret de comunicació amb props, identificant el pare, el fill i les dades que es passen

- Component Pare: LlibresView.vue (consulta Firestore i obté el llistat complet de llibres).
- Component Fill: LlibreCard.vue (rep les dades d'un llibre concret i les mostra en pantalla).
- Dades passades (props): S'envien l'objecte :llibre="item" i la posició :index="index", els quals contenen els atributs de títol, autor i any.

---

## La relació de les tres rutes i el contingut de cadascuna

1. / (HomeView): Pàgina d'inici amb un missatge de benvinguda i una presentació general del projecte.
2. /llibres (LlibresView): Pàgina central del catàleg que es connecta amb Firestore per carregar i mostrar els llibres.
3. /sobre-nosaltres (AboutView): Pàgina informativa sobre la pàgina web i la marca. 

---

## La col·lecció de Firestore utilitzada, els camps principals i la vista que en mostra les dades

- Nom de la col·lecció: llibres
- Camps principals del document:
  - títol (cadena de text)
  - autor (cadena de text)
  - any (número)
- Vista encarregada de mostrar les dades: LlibresView.vue (mitjançant el component fill LlibreCard.vue).
- Gestió d'estats de la petició:
  - Càrrega (carregant): Mostra un indicador animat i missatge d'espera mentre es recuperen les dades.
  - Llista buida (llibres.length === 0): Mostra un avís si la col·lecció no té registres.
  - Error (error): Captura i mostra un missatge si falla la connexió amb Firestore.
- Regles de seguretat: Definides al fitxer firestore.rules (lectura pública allow read: if true;, escriptura denegada allow write: if false;).

---

## Gestió del repositori (.gitignore)

El projecte disposa d'un fitxer .gitignore configurat per excloure dependències (node_modules/), fitxers de construcció (dist/) i fitxers d'entorn amb credencials privades (.env).

---

## L’enllaç a la web publicada amb Firebase Hosting

[Enllaç del projecte](https://projecte-4f175.web.app)