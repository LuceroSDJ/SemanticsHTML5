# SemanticsHTML5
A deeper understanding of a markup language and programming languages expands your horizon of opportunities allowing you to build a stronger foundation of your knowledge.

Let's learn a valuable piece of knowledge at a time!

## Understanding Semantics HTML5:
HTML is a markup language used to tell the browser how to display the content on the page. It consists of non-semantic HTML tags and semantic HTML5 tags.

Unlike non-semantic HTML tags, semantic HTML5 tags tell the browser what TYPE OF CONTENT they contain and what role it plays in the page. 
```
Example:
<div> Text </div>               <header> Text </header>
<div> Text </div>      vs.      <article> Text </article>
<div> Text </div>               <footer> Text </footer>
```
In the example above, div tags serve only as text holders. On the other hand, header, article, and footer tags specifically indicate the type of content they contain, which makes it easier for machines to understand the structure and organization of the page.

## Basic HTML5 skeleton file
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
    <heade>...</header>
    <article>
        <section></section>
    </article>
    <footer>...</footer>
  </body>
</html>
```

## Understanding head tag
```
<head>
    <meta charset="UTF-8">
```
### What is "UTF-8"? (U from Universal Character Set + Transformation Format—8-bit) 
It is a universal international standard character encoding capable of encoding English characters, numbers, and punctuation also know as ASCII (American Standard Code for Information Interchange) characters. These characters are called code points in Unicode. The encoding is variable-length and uses 8-bit code units (one byte).

### What is Unicode encoding scheme's role?
It's role is to unify all the different encoding schemes out there. It defines values for over 128,000 characters and has several encoding forms:
* UTF-8 : Uses one byte
* ITF-16: Uses two bytes
* UTF-32: Uses four bytes
Note: 1 byte = 8 bits

### What is a code point?
It is the value that a charactrer is given in the Unicode standard, which are written as hexadecimal numbers and have a prefix of U+
```
A is U+0041
```
Source: https://www.thoughtco.com/what-is-unicode-2034272 

```
    <meta name="viewport" content="width=device-width, initial-scale=2.0">
```
### HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
A meta tag viewport element gives the browser instructions on how to control the page's dimensions and scaling.

```
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
```  
### The X-UA-Compatible meta tag allows web authors to choose what version of Internet Explorer the page should be rendered as.
Note: (review statement) If you need to support IE9 or IE8, then it is recommended to the tag. -Stack overflow
```
    <title>Document</title>
</head>
```

### Setting my footer to the bottom of the page
I tried footer{position: absolute} & footer{position: fixed} and fixed position seemed to work as expected. Please watch the following short videos to see the difference.
[Footer{position_ absolute; bottom_ 0}](https://drive.google.com/file/d/1jlzEWvFn9utxMmu80iBTcKdZbknYfGll/view)

[footer{position:fixed} final](https://drive.google.com/file/d/1_rMiqg9P0wfiNFF88ilhX1GtW9v8kOHM/view)