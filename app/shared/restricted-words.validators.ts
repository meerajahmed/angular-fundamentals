import {FormControl} from "@angular/forms";

export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } /* return type Object with key -> string and value -> any */ => {
    if( !words ){
      return null;
    }
    let invalidWords = words
      .map( word => control.value.includes(word)? word : null )
      .filter( word => word != null );
    return invalidWords.length
      ? {"restrictedWords": invalidWords.join(", ")}
      : null;
    /* return null if valid*/
  }
}