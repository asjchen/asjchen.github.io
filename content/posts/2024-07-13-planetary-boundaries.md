+++
title = '🌀 A Whirlwind Tour of Planetary Boundaries'
date = 2024-07-13T15:00:39-07:00
draft = false
+++

My last class in college examined the relationship between food and the environment, with [Prof. Christopher Gardner](https://profiles.stanford.edu/christopher-gardner).[^1] On the first day, we were introduced to planetary boundaries — a set of 8-9 dimensions of the Earth that includes climate change — in Springmann et al.’s paper “[Options for keeping the food system within environmental limits.](https://www.nature.com/articles/s41586-018-0594-0)”

{{< figure src="/images/2024-07-13-planetary-boundaries/primary-spokes.png" caption="Visualization of the planetary boundaries around 2015, based on [this paper](https://www.science.org/doi/10.1126/science.1259855). Image itself from [here](https://news.mongabay.com/2022/04/freshwater-planetary-boundary-considerably-transgressed-new-research/). Under Biosphere Integrity, BII = Biodiversity Intactness Index (measure for functional biosphere integrity) and E/MSY = extinctions per million species-years.">}}

This spoke-like image has stuck with me since then; it’s helped me understand how my current career in food waste reduction is more than just a climate change solution. Recently, though, I got curious about what these boundaries actually entail and how they’re calculated — how do I know they’re not just arbitrary numbers? 

## Planetary Boundaries (and Caveats)
Planetary boundaries attempt to define a safe operating space for humanity, to keep Earth in a stable state. 

Our best reference for such an equilibrium comes from the Holocene epoch, which starts from the Last Ice Age (about 11700 years ago) and ends at the British Industrial Revolution — the start of the Anthropocene epoch.[^2] One could argue that this reference point is too strict given that era supported a much smaller human population; however, many of the boundaries established are rooted in concrete consequences that affect human well-being, such as water quality or climate-related displacement.

While useful, the planetary boundary model is a heavily simplified representation of our highly complex Earth. That means keeping the following in mind:
- We may discuss each boundary as a single summary statistic, but in reality, our understanding is a range / distribution of numbers.
- That said, if we’re even approaching this range, then we should still be concerned. That’s because environmental systems can have tipping points after which the change will be devastating, often from positive feedback loops. (We just don’t know where in this range the tipping point is!)
- The “planetary” in “planetary boundaries” means we’re choosing a number representing the entire Earth; however, all the dimensions we’ll discuss except climate change concern water or land and are thus inherently regional. When considering solutions to alleviate environmental pressure, we may need to direct efforts to specific areas rather than simply focusing on reducing the overall metric. Even climate change yields vastly different regional effects (e.g. Caribbean hurricanes) and calls for regional solutions (e.g. mitigating fossil fuel production in a particular city).
{{< figure src="/images/2024-07-13-planetary-boundaries/regional-viz.png" caption="Credit: https://www.science.org/doi/10.1126/science.1259855">}}
- Our collective understanding of planetary boundaries has evolved just in the past few years. Here’s a good visualization of the changes:
{{< figure src="/images/2024-07-13-planetary-boundaries/boundaries-over-time.png" caption="Credit: https://www.stockholmresilience.org/research/planetary-boundaries.html">}} 
For the remainder of this post, we’ll discuss the boundaries known to be at risk in 2015, as well as the blue water boundary.[^3]
- Most of our future statistics focus on 2050; however, *the phenomenon we’ll explore are happening right now, and the way we act should reflect that.* 


With these caveats in mind, let’s dive into the boundaries mentioned in the Springmann et al. paper, which are more directly tied to the food system and are currently exceeded (or at risk of being exceeded). 

## Climate Change
Let’s start with the most heavily studied dimension: climate change. At this point, we’ve likely heard many consequences of not reducing greenhouse gases, but here are a couple of quantitative predictions that resonate most with me:
- An estimated [216 million people](https://openknowledge.worldbank.org/handle/10986/36248) across the world will need to migrate by 2050 due to climate change-related water availability, crop productivity, increased storm activity, or sea-level rising.
- An additional [1-183 million people will be at risk of hunger](https://www.ipcc.ch/srccl/) by 2050 as compared to a no-climate change scenario.

See the [IPCC special report](https://www.ipcc.ch/srccl/) or this [NYTimes FAQ](https://www.nytimes.com/article/climate-change-global-warming-faq.html) for more on the potential effects.

The planetary boundary considers what CO<sub>2</sub> (equivalent) atmospheric concentration would give the Earth a 66% chance of limiting global warming to 2°C above pre-industrial levels. This scenario is called *RCP 2.6*, and it is one of the *representative concentration pathways* representing how atmospheric CO<sub>2</sub>-equivalents translate to radiative forcing (the increased infrared radiation absorbed over the Earth’s area i.e. global warming). RCP 2.6 denotes when the radiative forcing value in the year 2100 is 2.6 watts per square meter (W/m<sup>2</sup>).
{{< figure src="/images/2024-07-13-planetary-boundaries/rpc.png" caption="RCP scenarios (Source: [Wikipedia](https://en.wikipedia.org/wiki/Representative_Concentration_Pathway)) For reference, in 2022 we [already passed 520 CO<sub>2</sub> ppm equivalents](https://gml.noaa.gov/aggi/), including the effects of non-CO<sub>2</sub> greenhouse gases such as methane.">}}

While the planetary boundary is based on this concentration of CO<sub>2</sub> equivalents, perhaps a more meaningful metric for measuring progress is the amount of human-produced greenhouse gas emissions. This is the metric that Springmann et al. uses to consider the impact of possible mitigations to climate change.

Food systems contribute an estimated 21-37% of these emissions ([IPCC](https://www.ipcc.ch/srccl/) and [Our World in Data](https://ourworldindata.org/food-ghg-emissions)); it’s estimated that with business as per usual, the food system alone would [deplete our entire greenhouse gas emission budget](https://ourworldindata.org/food-emissions-carbon-budget) for RCP 2.6 by 2050.  Even if we assumed no additional land for future agriculture, we would still following contribute to emissions:
- Methane from food waste directly
- Methane from maintaining animals (cows)
- Nitrous oxide from fertilizer used to grow the food
- Greenhouse gases from transporting food globally

## Nutrient Pollution (Nitrogen and Phosphorus)
Although we see a lot of press about climate change, we’re actually at an even greater risk of exceeding the reactive nitrogen boundary than we are the climate change boundary (which is… concerning). 

Nitrogen gas (N<sub>2</sub>) is inert and makes up most of the Earth’s atmosphere; however, *reactive nitrogen* refers to nitrogen compounds, such as nitrogen oxides (NO<sub>2</sub>, N<sub>2</sub>O, NO<sub>3</sub>) or ammonia (NH<sub>3</sub>). That last compound also happens to be a primary component of synthetic fertilizer. While synthetic fertilizer has improved crop yields over the past century, it’s also inefficient. In cereal crops, it’s estimated that [50-75% of the nitrogen](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8777959/) in fertilizer actually doesn’t get incorporated into the plants at all! That reactive nitrogen gets lost into the surrounding air and water as *nutrient pollution*.

The consequences of this loss that [this paper](https://www.sciencedirect.com/science/article/abs/pii/S1877343513000833) considers for the nitrogen planetary boundary are:

- Ammonia leaking into the atmosphere and hurting lichens and higher plants
- Nitrous oxide (N<sub>2</sub>O) leaking into the atmosphere and contributing to climate change. Nitrous oxide is a particularly potent greenhouse gas; one ton has the warming effect of [over 250 tons](https://www.epa.gov/ghgemissions/overview-greenhouse-gases) of carbon dioxide!
- Nitrate (NO<sub>3</sub><sup>-</sup>) contaminating ground water and, if consumed in drinking water, causing [blue baby syndrome](https://www.health.state.mn.us/communities/environment/water/contaminants/nitrate.html) (in which red blood cells have trouble carrying oxygen)
- Reactive nitrogen leaching into bodies of surface water and causing *eutrophication*. The excess nutrients in the water develops large algal blooms that, when they decompose, consume oxygen. The resulting low oxygen levels mean fish, corals, or other aquatic life cannot survive, resulting in *dead zones*. The dead zone in the Gulf of Mexico alone has caused up to [~$2.4B in damages](https://www.ucsusa.org/resources/reviving-dead-zone) to fisheries and marine habitat.
{{< figure src="/images/2024-07-13-planetary-boundaries/eutrophication.jpg" caption="Eutrophication. Image credits: https://www.tomorrow.city/what-is-eutrophication-risk-problems-treatments-solutions/">}}

The first two factors concern the air and are thus more global, but the last two factors concern bodies of freshwater and are thus more regional. The level of nitrate contamination and eutrophication depends on how much intensive farming that region contains. To account for this, the authors set a planetary boundary that assumes “whenever we make a reduction in nitrogen loss, it’s applied to a region that’s exceeding its critical nitrogen concentration already”; this is a reasonable, but optimistic assumption. (Here, “region” might mean a 0.5° x 0.5° square.)

With these assumptions, it turns out the nitrous oxide and the eutrophication risks are the most pressing; our levels of reactive nitrogen loss are already [**more than 2.5x the computed planetary boundary**](https://www.science.org/doi/10.1126/science.1259855). Note the nitrous oxide risk intersects heavily with the climate change boundary; if we drastically reduced greenhouse gas emissions elsewhere, then we would have more leeway on the nitrous oxide front and worry more about the eutrophication risk. In any case, business as usual will far surpass the planetary boundary in the next decades.

Our food system contributes even more to this dimension than it does to climate change; [about 90% of reactive nitrogen inputs](https://www.sciencedirect.com/science/article/pii/S2590332220306643) from humans occur through agricultural activities, such as applying synthetic fertilizer. 

Closely related to the reactive nitrogen is phosphorus, as both plant nutrients:

- Runoff into surface water as a result of human activities, primarily synthetic fertilization in agriculture.
- Cause eutrophication if present in high concentrations — again, the nutrients that help crops grow also promote algal blooms! The goal is to keep phosphorus concentrations below 50–100 mg per liter.

Springmann et al. use a phosphorus flow model and compute how much human phosphorus usage is possible to maintain a steady state, with sufficiently low surface water concentrations. (It’s unclear whether the paper accounts for how phosphate rock, under P mine, is a nonrenewable resource.)

{{< figure src="/images/2024-07-13-planetary-boundaries/phosphorus-flow.png">}}

With this setup, Springmann et al. estimate that the planetary boundary is around 8-17 teragrams of phosphorus, but project our 2050 usage to be around 27-28 teragrams — so we’d be exceeding the boundary by at least 1.6x. (For reference, the Great Pyramid of Giza weighs [5-6 teragrams](https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza).)


## Land Use
The planetary boundary for land use is designed to “preserve biome integrity” — essentially, maintaining sufficiently forested land on Earth. The biomes include:

- Tropical forests, which support countless flora and fauna, sequester heavy amounts of carbon and would thus trigger positive feedback loops in climate if cut down.
- Boreal forests (taiga), which lie in northern regions such as in Canada or Alaska, affect the land’s albedo (how much sunlight is reflected) and thus influence the climate in those areas.
- Temperate forests, which lie in mid-latitude regions such as in the United States or Western Europe, consist of a mix of deciduous and evergreen trees and, like tropical forests, serve as carbon sinks.
- Subtropical forests, which lie in mid-to-low latitude regions such as Mexico or South China, share attributes of both tropical and temperate forests

{{< figure src="/images/2024-07-13-planetary-boundaries/forests.jpg" caption="Credit: https://unece.org/forests/boreal-forests">}}

Because of the sequestered carbon in these forests, deforestation leads to positive feedback loops in climate. In the Amazonian rainforest, less tree cover means less moisture from the soil reaching the atmosphere, which means less rainfall, which means more dry vegetation, which means higher risk of fire, which means even less tree cover. The climate change boundary focuses on first-order greenhouse gas emissions rather than the second-order effects of these feedback loops, hence why we have a separate boundary for land use.

The focus for preventing more deforestation focuses on monocrop agriculture; [FAO](https://www.fao.org/newsroom/detail/cop26-agricultural-expansion-drives-almost-90-percent-of-global-deforestation/en) asserts that agricultural expansion drives nearly 90% of deforestation. Given the existing pressure against forest cover, Springmann et al. sets a target of just maintaining our land use — but for feeding the larger population expected in 2050; by then, the authors expect cropland use demand to increase about 66%. This boundary of cropland area is ~10.6–14.6 million km<sup>2</sup>, or about 7-9% of the total land surface area on Earth. In this paper, the authors assume the status quo in how we maintain land, but ideally, we should also consider agroecological solutions such as:

- Silvopasture — this is a setup that supports both forest and livestock farming on the same land
- Agroecology techniques — one that comes to mind is the *milpa*, which supports complementary crops of squash, corn, and beans

## Blue Water Use
The [2015 planetary boundary understanding](https://www.science.org/doi/10.1126/science.1259855) puts our surface freshwater usage well within the critical threshold — 2550 km<sup>3</sup>/year current usage compared to the 4000-6000 km<sup>3</sup>/year boundary. For reference, it’d take about a little over 4000 km<sup>3</sup> of water to fill the Grand Canyon! However, Springmann et al. cite a [more stringent boundary](https://www.sciencedirect.com/science/article/pii/S1877343513001498) of 1100-4500 km<sup>3</sup>/year, so they choose to discuss it. (As it turns out, in the [2023 understanding](https://www.stockholmresilience.org/research/planetary-boundaries.html), we’re exceeding the freshwater boundaries anyway.)

Here, we focus on *blue water*, which represent the surface-level freshwater in bodies such as lakes or rivers and its consumption. This term is opposed to *green water* that refers to rainfall caught by soil, or *gray water* that refers to water required to dilute the load of pollutants, as determined by legal standards.

In the more stringent definition of the blue water boundary, we consider [*environmental flow requirements (EFRs)*](https://hess.copernicus.org/articles/18/5041/2014/hess-18-5041-2014.html) for sustaining river ecosystems; when we humans build dams, we decrease or otherwise modify how much water flows through the rivers. This affects the water quality and compromises the survival of fish species — which in turn hurts human populations depending on them. In 2014, it was [estimated](https://hess.copernicus.org/articles/18/5041/2014/hess-18-5041-2014.html) 75% of all main rivers are fragmented (i.e. interrupted by dams) and that 65% of global rivers are under moderate-to-high water security and biodiversity threat. Like for nitrogen eutrophication risk, this aquatic ecosystem risk is regional, so the planetary boundary is based on [calculating](https://www.sciencedirect.com/science/article/pii/S1877343513001498) the flow over 0.5° x 0.5° cells via simulation.

Our food system comprises the lion’s share of human blue water use — about 71% goes to irrigation in agriculture. The amount of blue or green water used per acre [depends on the crop](https://watercalculator.org/water-footprint-of-food-guide/) — for instance, one serving of white rice requires about 55L of blue water. Livestock also requires large amounts of blue and green water to grow their feed; one serving of beef requires about 70L of blue water (and significantly more green water). 

{{< figure src="/images/2024-07-13-planetary-boundaries/water-calculator-beef.png" caption="[Water Calculator](https://watercalculator.org/water-footprint-of-food-guide/) entry for beef, showing the total water use and the composition across blue, green, and grey water, in that order. Even the small percentage for blue water means 70L per serving.">}}

Lack of blue water security puts our agricultural production and thus our food security at risk in 2050. The consequences of scarce clean freshwater reach beyond agriculture as well; in 2023, around 2 billion people around the world did not have access to clean and safe drinking water ([NPR](https://www.npr.org/2023/03/22/1165464857/billions-of-people-lack-access-to-clean-drinking-water-u-n-report-finds#:~:text=Around%202%20billion%20people%20around,Water%20Development%20Report%20released%20Wednesday.)).


## Parting Thoughts
We see that a high level:

- There are more dimensions to consider about the Earth’s limits than just climate change. Taken together, the compounded effects of crossing multiple planetary boundaries are vastly more devastating than climate change alone. These dimensions aren’t necessarily orthogonal to each other, but they may shine spotlights on different human activities.
- Changing the food system has a key role in these dimensions — especially for the nitrogen, phosphorus, and land use boundaries. Even for the planetary boundaries not discussed in Springmann et al, such as genetic diversity, the food system likely contributes heavily (ex. forests support species of flora and fauna).

There are definitely important intricacies missing from this post, and there’s much more to explore within this space — here are a few topics we might explore:

- Biodiversity planetary boundary: this measures the populations across different species and functional groups, and we can see that we’re already exceeding this boundary. There’s no denying that extinction rates are much higher now with deforestation — approximately 30000 species go extinct every year! That’s a loss in itself, but there’s also more to learn around the direct impact on humanity. For instance, understanding how losing pollinator species would disrupt our ecosystems would help intuit what the biodiversity boundary entails.
- Food system solutions: Springmann et al’s main focus is on reducing food waste, improving technology, adopting flexitarian diets, or combining all of these options might alleviate pressure on the planetary boundaries.
- Social and cultural implications: it’s important to remember that these changes ultimately affect *people* and their livelihoods, cultures, and histories. For instance, we can consider what environment-related displacement means for our world communities. Oftentimes, these factors are hard to measure and are thus overlooked in quantitative studies.

## Further Reading
- "[Options for keeping the food system within environmental limits](https://www.nature.com/articles/s41586-018-0594-0)” — Springmann et al.’s article is the primary motivator for this post.
- “[Earth beyond six of nine planetary boundaries](https://www.science.org/doi/10.1126/sciadv.adh2458)” — this article is the most recent update to our planetary boundary status
- [Civil Eats’s coverage on climate solutions](https://civileats.com/2023/08/01/as-the-climate-crisis-escalates-here-are-18-food-and-ag-solutions/) — articles like one discuss what potential food-related climate solutions might look like, often focusing on the impact on people

Special thanks to Charlie Hoffs (who helped inspire this topic for me), [Adi Ganesh](https://acganesh.github.io/), and John McIntosh for helping with the writing and editing process!



[^1]: The class was Stanford's *HUMBIO 14: Understanding Connections between Food and the Environment* for those curious!

[^2]: The definition of the Anthropocene epoch is still under discussion. I’m using the Industrial Revolution boundary because it matches the [original planetary boundaries paper](https://www.nature.com/articles/461472a) in 2009.

[^3]: Since 2015, the green water and novel entities boundaries have also been exceeded.


