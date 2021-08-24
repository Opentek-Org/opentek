
import { annotate } from 'https://unpkg.com/rough-notation?module';

const e = document.querySelector("#h4-annotate");
const annotation = annotate(e, { type: "underline", color: "red" });
annotation.show();
