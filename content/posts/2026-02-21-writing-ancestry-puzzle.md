+++
title = '🧩 This Blog Post is Not a Puzzle (but it talks about one!)'
date = 2026-02-21T15:26:17-08:00
draft = false
+++

Recently, I had the privilege of writing for the [MIT Mystery Hunt](https://puzzles.mit.edu/), a roughly 72-hour puzzling extravaganza that occurs on MIT's campus every year on MLK weekend. My team Cardinality won last year, which meant that, per tradition, we had the "honor" of organizing and running this year's hunt.[^1]

Writing puzzles turned out to be a great outlet for my creative shenanigans, and I thought I'd share the process of ideating, writing, and testsolving **[Ancestry](https://puzzmon.world/puzzles/ancestry)**, one of three puzzles I wrote. 

If you're new to the concept of puzzlehunts, I'd suggest trying the easier puzzles from this [CiSRA puzzlehunt](https://www.mezzacotta.net/puzzle/cisra/2013/puzzles.html) (such as [Old Chairman of the Farm](https://www.mezzacotta.net/puzzle/cisra/2013/1A-Old-Chairman-of-the-Farm.pdf)), but here's a brief summary I stole from Cardinality's website:

> In a typical puzzle, you receive some information and have to extract an answer out of it, which is almost always an English word or phrase. Puzzles can come in many different forms; the only real commonality is that you usually receive no direct instructions, so it's up to you to figure out how to make sense of the information you're given.

Conversely, if you're experienced in puzzlehunting but didn't get to solve [this puzzle](https://puzzmon.world/puzzles/ancestry), feel free to try it and read the [solution](https://puzzmon.world/puzzles/ancestry/solution) before continuing!

{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/spoiler-block.png" caption="You have been warned.">}}

## Early Conception [~1 total hour]

One theme that's shown up in my nerdy food system reading is that our food system is far less diverse than it might seem on the surface.[^2] [^3] A couple years ago, I discovered that most citrus descended from just three fruits: citrons, mandarins, and pomelos! This fact surfaced again on my Reddit feed as a taxonomy diagram — right when I was exploring puzzle ideas for Mystery Hunt. At that point, I fully committed to somehow featuring citrus ancestry in a puzzle.

{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/reddit-taxonomy-diagram.jpg" caption="The [diagram](https://www.reddit.com/r/coolguides/comments/11a7l8i/the_citrus_family_fruits/) that sparked it all!">}}

## Puzzle Design [~5 total hours]
In the brainstorming process, I thought of lots of potential mechanisms, with varying levels of feasibility and vagueness, such as:

- Starting with a large grid, labeling each square with a fruit name, and coloring the squares based on whether the fruits had citron ancestry (and similarly for mandarin and pomelo) to draw silhouettes
- Using a color triangle, with each RGB corner assigned to a different parent citrus, and assigning fruits to colors accordingly
- Representing citron/mandarin/pomelo ancestry with ternary digits, or with small prime numbers that would be multiplied together
- Finding words with an appropriate number of C's, M's, and P's in their spellings

The rabbit holes for these ideas proved endless, and in the process of exploring these possibilities, I also realized the citrus theme posed some obstacles:

- Much of our understanding of citrus is based on recent genomic data. In particular, the most recent species nomenclature was [proposed in 2020](https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128121634000048), and I was concerned that different sources on citrus would conflict.
- Some citrus fruits, such as kumquats, still have disputed taxonomy. It's unclear whether they should form their own genus, species, or group of species.

I realized I needed to set some guidelines, based on what I wanted puzzlers to experience:

- Puzzlers should leave having learned that "citrus ancestry is primarily constrained to citron, mandarin, and pomelo — that's strange!"
- Puzzlers should have no ambiguity in what the intended taxonomy should look like — I didn't want puzzlers wondering if they had the correct information
- (bonus) Puzzlers must understand the taxonomy of citrus fruits to solve the puzzle

The last two points motivated me to provide a blank ancestry tree at the start; that way, puzzlers would still have to research the citrus taxonomy, but they would definitely arrive at the intended tree structure.

{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/initial-tree.png" caption="Leaving the names abbreviated meant puzzlers still needed to figure out the citrus \"aha\", but they could confirm whether that insight was on the right track.">}}

That left me with the question of how to use the ancestry information for an interesting purpose. I realized that a lot of grid logic puzzles use single-digit numbers (such as Sudoku), which I could derive by expressing the composition in terms of eighths. A lemon is a hybrid of a citron and a bitter orange, which in turn is a hybrid of a mandarin and a pomelo, so a lemon represented 4/8ths citron, 2/8ths mandarin, and 2/8ths pomelo. That meant I could replace the numbers in a logic puzzle with the fruits. An interesting side effect of this representation is that I could construct three different logic puzzles with the exact same fruits and locations — and I decided to lean into this idea.

I chose [Hashi (Bridges)](https://en.wikipedia.org/wiki/Hashiwokakero) as the logic puzzle because it was less problematic than Sudoku if I couldn't represent every digit 1-9. I also felt that it would be more predictable how the logic dynamics would change if I added or deleted a node compared to [Akari](https://en.wikipedia.org/wiki/Light_Up_(puzzle)).
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/hashi-example.png" caption="Example Hashi puzzle, taken from [here](https://www.conceptispuzzles.com/index.aspx?uri=puzzle/hashi/techniques). The goal is to connect bridges between nodes that don't cross, such that each node's number represents the number of bridges attached.">}}

Taken altogether, I designed the puzzle-solving experience as follows:
1. Puzzlers figure out the puzzle's citrus theme.
2. Puzzlers fill in a given tree diagram and find the taxonomy of different fruits.
3. Puzzlers use the taxonomy (expressed in eighths) to construct three different Hashi puzzles (but with the nodes in the same positions). I called these three puzzles the C, M, and P layers.
4. Puzzlers extract the final answer.

## Writing the Puzzle [~12 total hours]
The biggest risk for this idea to work was the logic puzzle: would it be possible to design three valid Hashi grids with the numbers in the same place? What if the numbers were constrained to a limited bank of number triplets (as dictated by existing citrus fruits)?

Here was my initial list of citrus fruits with reasonably well-defined pedigrees.

| Fruit | Citron Number | Mandarin Number | Pomelo Number |
| ----- | ------------- | --------------- | ------------- |
| Valencia Orange | 0 | 4 | 4 |
| Grapefruit | 0 | 2 | 6 |
| Rangpur | 4 | 4 | 0 |
| Buddha's Hand | 8 | 0 | 0 |
| Lemon | 4 | 2 | 2 |
| Bergamot | 2 | 3 | 3 |
| Key Lime | 4 | 0 | 0 |
| Persian Lime | 4 | 1 | 1 |

A few observations about this set of possible nodes:

- Only bergamot and Persian lime had odd numbers. That meant I leaned on these fruits heavily to construct more interesting Hashi puzzles.
- Key lime (and Buddha's hand to a smaller extent) allowed me to connect nodes on the C puzzle without heavily affecting the M and P puzzles

The overall design process felt iterative; I could start by drawing a base puzzle, which would encourage specific logical leaps in one layer, and then I could add or remove a few nodes at a time to ensure a valid solution for the other layers. In practice, my writing cycle looked something like the following diagram:
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/puzzle-iteration.png" caption="Thicker arrows represented transitions I made more often. Side note: I found [Excalidraw](https://excalidraw.com/) to be an effective tool for this kind of iteration!">}}

Halfway through, I discovered another complication: Persian lime is actually a *triploid cross*, rather than a diploid cross, between Key lime and lemon. This meant that Persian limes actually inherit 2/3 of their genetic material from the Key lime and 1/3 of their genetic material from the lemon, which sabotaged the puzzle's ancestry mechanism. As a result, I only had bergamot as a node with odd numbers, and I leveraged it heavily to construct the Hashi puzzles.

Since solving a Hashi puzzle told the puzzler which nodes were connected, I decided that for final answer extraction, I'd scatter letters in the Hashi puzzles, and puzzlers would check which letters were intersected by a Hashi edge. Here are the final Hashi solutions and extraction[^4]:
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/c-solution.png">}}
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/m-solution.png">}}
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/p-solution.png">}}

## Testsolving and Revising the Puzzle [~9 total hours]
I felt excited by the ideas I came up with — but the real test would be whether puzzlers would

1. Solve the puzzle at all
2. Enjoy their experience, or at least appreciate the ideas behind the puzzle

When I completed my first draft, I ran three testsolve sessions; this was enough for me to decide on any major mechanism changes, gauge the difficulty, clear any unnecessary red herrings, and adjust any formatting to nudge puzzlers in certain directions.

Generally, a testsolve session went like this:

- I gathered ~3 fellow Cardinality members (who weren't already spoiled by the puzzle mechanic) on Discord
- I left them with the puzzle, muting myself so my reactions were not audible, and I recorded when the testsolvers arrived at different "ahas"
- If the testsolvers spent >20 minutes on the wrong track, I interjected with a hint
- When the testsolvers finished the puzzle, I discussed reactions and feedback

In the first session, the puzzle was presented with a single grid. The idea was to exhibit how the three puzzles actually used the same nodes (despite having different edges), and the extraction letters for each puzzle lived in three different shapes.
> {{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v1-tree.png">}}
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v1-grid.png" caption="Puzzle presented to the 1st testsolve group">}}

The solvers figured out the citrus theme and emoji-to-fruit assignment fairly quickly. Unfortunately, they didn't realize that there were three different Hashi puzzles; instead they interpreted the mechanism as "each emoji represented a single number 0-8, and the task was to logically deduce this mapping". Worse, solvers couldn't tell this idea was on the wrong track, so they spent a long time on it. This showed me I needed to more clearly clue that there were three distinct puzzles.

For the 2nd testsolve session, I presented the following draft featuring three layers of Hashi grids (which was actually how I originally imagined the puzzle concept).
> To build bridges with our past, it's traditional to cut fruit into eighths, as per our ancestry.
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v2-tree.png">}}
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v2-layers.png">}}
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v2-grid.png" caption="Puzzle presented to the 2nd testsolve group">}}

Again, the testsolvers figured out the citrus and Hashi themes; however, they got confused by the 3D grid (understandably!). Their prevailing idea was to deduce what number each emoji represented — but in a 3D version of Hashi, in which they needed to construct edges between the layers.[^5] Once again, it was not clear that each emoji actually represented three numbers at a time — and the 3D image inflicted more harm than good.

For the 3rd testsolve session, I took a suggestion to make a table, with one column for each layer, so it was much clearer that solvers should have one number per grid.
> To build bridges with our past, it's traditional to cut fruit into **eighths**, as per our ancestry.
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v3-tree.png">}}
{{< figure src="/images/2026-02-21-writing-ancestry-puzzle/v3-grid.png" caption="Puzzle presented to the 3rd testsolve group">}}

With this version, the testsolvers figured out the mechanism without straying too far on other ideas and solved it in under an hour. Aside from a couple minor adjustments, I felt I could release this puzzle into the wild.

## During the Mystery Hunt
Ancestry was accessible to solvers about 1/2–2/3 of the way through the hunt, and it fed into a metapuzzle (a puzzle that used Ancestry's answer and other feeder puzzle answers). I saw a handful of hint requests on the issues I expected — mostly around teams not figuring out the citrus connection at the start or teams struggling with the emoji-to-number mapping. 

At the end:

- 73 teams unlocked the puzzle.
- 44 teams "solved" the puzzle. During the hunt, I saw that Ancestry was often one of the last puzzles in the round to be solved. I suspected teams often solved the metapuzzle first, and then they "backsolved" Ancestry's answer.
- 15 teams submitted the correct answer less than 5 hours after unlocking the puzzle. I guessed that the remaining teams either backsolved or, less likely, worked on other puzzles and then returned to Ancestry much later. (For reference, another puzzle I wrote in the same round saw 55 "solves", but with 31 under 5 hours)
- 2 teams solved in under an hour.

In hindsight, I should have considered how Ancestry fit with the overall hunt structure. This puzzle required more up-front "ahas" to make tangible progress, and in a large-scale hunt with at least 7 other puzzles unlocked at a time, it made sense that folks opted for easier wins first.

## Final Thoughts
Although I wasn't sure how many teams forward-solved Ancestry, I was still reasonably happy with how this puzzle came together. There was something satisfying about successfully implementing a concept with heavy constraints; I had no clue if a three-layer Hashi puzzle, constrained to certain triples of numbers, was possible to construct.

I wrote two other puzzles for the hunt, and I was psyched that both turned out well!

- [V-fun](https://puzzmon.world/puzzles/v_fun) (written with Jerry Chen): a set of crossword-style clues and climbing diagrams
- [Road Trip](https://puzzmon.world/puzzles/road_trip): a trail of images and polity outlines

## Acknowledgements
First of all, massive thanks to the Cardinality folks for:
- Leading our team to win the 2025 Mystery Hunt
- Providing an ecosystem for writing, editing, and testsolving puzzles
- Planning the entire 72-hour extravaganza on MIT's campus for over an entire year

I'm grateful to be part of this unique experience.

Thanks to all the testsolving folks who spent multiple hours working through unpolished drafts of this puzzle.

Thanks to Darren Lee and Victor Chan, who read earlier drafts of this blog post.


[^1]: If you're curious about the overall hunt theme and structure, here's the [kickoff video](https://www.youtube.com/watch?v=nC8vCTHuFxk&pp=ygUQbWl0IG15c3RlcnkgaHVudA%3D%3D), [wrap-up video](https://www.youtube.com/watch?v=6CB1pjjCnKA&pp=ygUQbWl0IG15c3RlcnkgaHVudA%3D%3D), and [Reddit AMA](https://www.reddit.com/r/mysteryhunt/comments/1qm4hue/ama_we_are_the_members_of_cardinality_the_writing/).

[^2]: One non-citrus example is that nearly all bananas sold in the world belong to a single cultivar — the Cavendish — that's already vulnerable to T4 fungal disease. Perhaps one day I'll write a puzzle about this. 

[^3]: I recommend *The Food Explorer* by Daniel Evan Stone if you're curious about other crops introduced to the United States.

[^4]: This puzzle was a "feeder" puzzle whose answer would get used in downstream "meta" puzzles. When I proposed this idea, I was offered a few possible answers, and I chose BROWN because I thought it'd work with many possible cluephrases.

[^5]: I wish I had enough visual intuition to construct a puzzle like this!
