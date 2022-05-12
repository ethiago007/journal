import $ from 'jquery';
import { countVowel } from './business.js';
import { countConsonant } from './business.js';
import { wordCounter } from './business.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {
    $("form#word-counter").submit(function (event) {
      event.preventDefault();
      const passage = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(passage);
      const vowels = countVowel(passage);
      const consonant = countConsonant(passage)
      $("#total-count").html(wordCount);
     
      $("#vowel").html(vowels)
      $("#consonant").html(consonant)
    });
  });
  
  
 