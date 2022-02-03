# Butterfly

2021-12-23, my first foray into setting

![](butterfly.png)

**Rules:**
[standard](#standard)
[arrow](#arrow)
[killer](#killer)
[little killer](#little-killer)
[rising diagonal](#diagonal)

**Play online:**
[CtC](https://tinyurl.com/b7twmz48)
[f-puzzles](https://f-puzzles.com/?id=yxnpswht)

<details>
<summary>Hint 1</summary> 
The upper-right arrows are very restricted: what digits can appear in r3c5 and r5c7?
</details>

<details>
<summary>Hint 2</summary> 
Consider applying set theory to the red and blue regions here: https://tinyurl.com/bp7u2pv5.
</details>

# How to Peel a Cavendish Banana

2022-01-02, created for the CtC discord's monthly puzzle prompt "food"

![](cavendish-banana.png)

**Rules:**
[standard](#standard)
[arrow](#arrow)
[clones](#clones)

**Play online:**
[CtC](https://tinyurl.com/5a7kve6r)
[f-puzzles](https://f-puzzles.com/?id=y28knjuw)

# Overconstrained 1

2022-01-28

![](overconstrained-1.png)

**Rules:**
[standard](#standard)
[disjoint](#disjoint)
[anti-knight](#anti-knight)

**Play online:**
[CtC](https://tinyurl.com/2p9a9kx)
[f-puzzles](https://f-puzzles.com/?id=ycenxedq)

# Overconstrained 2

2022-01-28

![](overconstrained-2.png)

**Rules:**
[standard](#standard)
[disjoint](#disjoint)
[anti-knight](#anti-knight)
[kropki](#kropki)

No negative Kropki constraint: not all dots are necessarily given.

**Play online:**
[CtC](https://tinyurl.com/2p8pf4t3)
[f-puzzles](https://f-puzzles.com/?id=y9jvczpk)

# Killer hypercube

2022-01-28

![](killer-hypercube.png)

**Rules:**
[hypercube](#hypercube)
[killer](#killer)

**Play online:**
[CtC](https://tinyurl.com/mvxkfnh6)
[f-puzzles](https://f-puzzles.com/?id=yddv7dur)

# Arrow hypercube

2022-02-02

![](arrow-hypercube.png)

**Rules:**
[hypercube](#hypercube)
[arrow](#arrow)

**Play online:**
[CtC](https://tinyurl.com/4xv3jc6d)
[f-puzzles](https://f-puzzles.com/?id=y74otltk)

# Rules

## Standard

Place the digits 1-9 in every row, column, and box.

## Disjoint

Place the digits 1-9 in every box position.

For example, every digit appears in the upper-left corner of some box.

## Hypercube

The grid represents a 3x3x3x3 hypercube.
Place the digits 1-9 in each 3x3 orthogonal square within the hypercube.
These are: [boxes, rows, columns](#standard),
[groups of cells in the same position in each box (eg, r147c147)](#disjoint),
the left/middle/right vertical slices of a row of boxes (eg, r123c147), and
top/middle/bottom horizontal slices of a column of boxes (eg, r147c123).

## Arrow

Digits along an arrow sum to the digit in the bulb.

**Note:** Digits on an arrow can repeat if allowed by other rules.

## Killer

Digits within a cage may not repeat, and sum to the number in the upper-left corner if given.

## Little killer

The digits along a diagonal marked with a number sum to that number.

**Note:** Digits on such a diagonal can repeat if allowed by other rules.

## Diagonal

The marked long diagonal(s) do not contain repeated digits.

## Clones

The marked areas are clones of each other, and contain the same digits in the same positions.

## Kropki

Digits separated by a white dot have a difference of 1.
Digits separated by a black dot have a ratio of 2.
Unless otherwise specified, all such dots are given.
