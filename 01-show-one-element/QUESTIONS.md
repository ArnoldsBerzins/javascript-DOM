# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Your reply here...
Nē, tas atkal paliek paslēpts, tāpēc, ka lapa tiek pārlādēta no jauna un līdz ar to tiek pārlādēts viss JS un HTML kods.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Your reply here...
Nē, šīs funkcijas nozīme ir ielādēt HTML lapas kodu. 
---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Your reply here...
addEventListener 'klausās', kādas funkcijas izpildi, piemēram 'click', kas noklikšķināšanas gadījumā izpilda funkciju, kas ir definēta iekš addEventListener.
