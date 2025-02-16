+++
title = '🥬 A Food Waste Primer'
date = 2025-02-04T22:34:07-08:00
draft = false
+++

During a couple of summers in college, my housemates and I cooked at home, and I realized how much of our food landed in the trash. As a kid, I almost never saw this happening at home; wasted food meant wasted money and wasted labor, from all the folks who harvested, transported, and prepared the ingredients. Even with this in mind, though, I still mismanaged the food in my own kitchen — and I realized that with about 1/3 of all food lost or wasted worldwide, other folks had similar problems at scale.

When I returned to my senior year, I searched how to address food waste outside my residence. I volunteered at Stanford Food Recovery to redirect surplus food to nearby communities. I helped organize [Stanford Food Design Lab](https://fooddesign.stanford.edu/)‘s FoodInno conference around food waste reduction. Since then, I’ve reduced grocery-wide food waste as an applied scientist and machine learning engineer at [Afresh](https://www.afresh.com/).

As an informal advocate for food waste reduction for the past 7 years, I figured I’d share some personal notes I cite!

## Frequently Asked Questions

{{% dropdown title="**❓ How much food is lost or wasted anyway?**" %}}

About 1/3 of all food produced is lost or wasted[^1] at some point in the food supply chain worldwide. This translates to roughly **1.43 billion tons** and **$1 trillion** per year ([Food and Agriculture Organization of the United Nations i.e. FAO](https://www.fao.org/4/mb060e/mb060e00.htm))! For comparison, this amount weighs slightly more than all the mammals on earth combined ([source](https://www.visualcapitalist.com/biomass-of-mammals/)).

In the United States, about the same proportion of food is lost or wasted (30-40%), which translates to roughly [**80 million tons**](https://refed.org/food-waste/the-problem/) of food per year — or about 1.3lbs per person per day!
{{% /dropdown %}}
<br>


{{% dropdown title="**🍌 What about inedible portions of loss or waste? Are they counted?**" %}}

According to [ReFED](https://refed.org/articles/refed-s-new-estimates-on-food-waste-in-the-united-states-2020-2021-trends-and-covid-19-impact/)’s assessment in the United States: “Of all surplus food, only 22% was inedible parts; an additional 33% was spoiled or discarded due to safety concerns. That means around 45% of surplus was still considered fit for human consumption at the time of disposal.” (Of course, the spoilage is also often preventable by interventions early in the supply chain!)
{{% /dropdown %}}
<br>

{{% dropdown title="**🌏 What are the implications for the environment?**" %}}

They’re huge! I discuss how food systems contribute to Earth’s exceeding multiple planetary boundaries in a [previous post](https://asjchen.github.io/posts/2024-07-13-planetary-boundaries/), but in summary:
* **Climate change**: about 26% of greenhouse gas emissions (by CO2 equivalents) comes from food production ([Our World in Data](https://ourworldindata.org/food-ghg-emissions)), or equivalently, about 10% of greenhouse gas emissions comes from food loss and waste ([WWF](https://wwf.panda.org/discover/our_focus/food_practice/food_loss_and_waste/driven_to_waste_global_food_loss_on_farms/)). If food wastage (so both loss and waste) were a country, it would be the third largest emitter of greenhouse gases, behind China and the United States. With this magnitude, food waste reduction is listed as one of [Project Drawdown](https://drawdown.org/solutions/table-of-solutions)’s most impactful ways to reduce carbon emissions.
{{< figure src="/images/2025-02-04-food-waste-primer/ghg_emissions.png" caption="Credit: https://ourworldindata.org/food-ghg-emissions">}}

* **Nutrient pollution**: [about 90% of reactive nitrogen inputs](https://www.sciencedirect.com/science/article/pii/S2590332220306643) from humans occur through agricultural activities, such as applying synthetic fertilizer. Imbalance in the nitrogen cycle means eutrophication, which means deprives marine life from enough oxygen, loss of soil nutrition, biodiversity loss, and increase in atmospheric nitrogen oxides.

* **Land use**: about 50% of habitable land is used for agriculture, most of which is devoted to livestock ([Our World in Data](https://ourworldindata.org/land-use)). The land devoted to producing lost or wasted food would be the second largest country in the world by area! ([University of California](https://www.universityofcalifornia.edu/news/what-you-need-know-about-food-waste-and-climate-change))
{{< figure src="/images/2025-02-04-food-waste-primer/land_usage.png" caption="Credit: https://www.universityofcalifornia.edu/news/what-you-need-know-about-food-waste-and-climate-change">}}

{{% /dropdown %}}
<br>


{{% dropdown title="**🚚 Where is food lost in the supply chain, and why?**" %}}

The proportions differ depending which part of the world we're looking at. [ReFED](https://refed.org/food-waste/the-problem/#what_is_food_waste) breaks down the percentage lost/wasted at each supply chain step. Note that while waste in the home occupies the highest percentage, that waste could’ve been prevented by smarter decision-making earlier in the supply chain. A grocery store with strawberries nearing perishability might advertise a steep discount to clear that inventory, leaving the consumers to throw out any spoiled strawberries.
{{< figure src="/images/2025-02-04-food-waste-primer/us_sectors.png" caption="Credit: https://refed.org/food-waste/the-problem/#what_is_food_waste">}}

[FAO](https://openknowledge.fao.org/server/api/core/bitstreams/11f9288f-dc78-4171-8d02-92235b8d7dc7/content) also provides a summary of ways food might be lost or wasted along the path to the consumer.
{{< figure src="/images/2025-02-04-food-waste-primer/reasons.png" caption="Credit: https://openknowledge.fao.org/server/api/core/bitstreams/11f9288f-dc78-4171-8d02-92235b8d7dc7/content">}}
{{% /dropdown %}}
<br>

{{% dropdown title="**🌾 What types of food are wasted the most often?**" %}}

The below charts come from [FAO](https://www.fao.org/4/mb060e/mb060e00.pdf). By weight, we produce the most cereal crops (i.e. grains), followed by fruits + vegetables, so the majority of food wastage comes from cereal crops.
{{< figure src="/images/2025-02-04-food-waste-primer/breakdown_by_food_type.png">}}

However, by proportion, we lose the most from fruits and vegetables.
{{< figure src="/images/2025-02-04-food-waste-primer/breakdown_fruits_veggies.png">}}
We lose the second largest proportion from roots and tubers.
{{< figure src="/images/2025-02-04-food-waste-primer/breakdown_roots_tubers.png">}}

{{% /dropdown %}}
<br>

{{% dropdown title="**💡 What can we do to reduce food loss or waste?**" %}}

A lot! This is by no means an exhaustive list, but here are some ideas more focused on the United States, especially in California where I currently reside. (Table 3 in [this article](https://www.annualreviews.org/docserver/fulltext/energy/44/1/annurev-environ-101718-033228.pdf?expires=1736643972&id=id&accname=guest&checksum=B500562128D8E54BF11BC70B6DA0667B) breaks down a more comprehensive categorization of potential solutions.)

* **Policy**
    * **Date labeling**: some labels such as “sell by”, “best if used by”, or “best by” don’t pertain to food safety; they’re guides for when an item might be at peak quality or for how a retailer should handle its inventory. An item might be unsafe to eat before its sell by date, or it might still be high quality after its labeled date ([NRDC](https://www.nrdc.org/sites/default/files/dating-game-report.pdf)). There’s also no industry consensus for what these terms actually entail (and [state laws vary](https://www.nrdc.org/sites/default/files/dating-game-report.pdf)), leading to retailer and consumer confusion and food waste. It’s estimated that about [7% of US food waste](https://insights-engine.refed.org/food-waste-monitor?break_by=cause&indicator=tons-surplus&view=detail&year=2023) results from no label standardization.
        
        The FDA and USDA are [exploring standardizing these labels](https://www.foodnavigator-usa.com/Article/2024/12/04/fda-could-standardize-expiration-date-labels), and some states have taken steps in that direction as well. [California’s AB 660](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB660) will prohibit the “sell by” label in 2026.
        
    * **Organic waste:** although ideally food waste is prevented further upstream, we can at least compost it; otherwise, sending that waste to the landfill generates methane gas (a potent greenhouse gas). California’s [SB 1383](https://www.recyclesmart.org/sb-1383/) calls for 75% landfill diversion of organic waste by 2025 (and for at least 20% of currently disposed surplus food to be recovered — discussed more below!)

* **Supply chain design:**

    * **Optimized planning**: retailers or distribution centers might blanket overorder to avoid out-of-stock events, and for fresh items like fruit and vegetables, this overordering leads to food waste. However, better optimized ordering solutions such as [Afresh](https://www.afresh.com/) might cut excess ordering while still maintaining sufficient inventory levels (ex. keeping shelves full at the grocery store).

* **Food recovery / rescue**
    * **Nonprofit food rescue**: organizations like [Replate](https://www.replate.org/) and [Copia](https://gocopia.com/) redirect surplus food from businesses (who receive tax benefits) to non-profits. This coordination poses a nontrivial matching problem, as every non-profit has different capacity, food type, and time requirements, but food is a perishable good. (When I volunteered with Stanford Food Recovery, we worked with [Silicon Valley Food Recovery](https://jointventure.org/initiatives/silicon-valley-food-recovery) and [Loaves and Fishes](https://www.loavesfishes.org/), nonprofits that handled both the surplus food pickup and the direct donation to local communities.)

    * **Secondary markets**: [Too Good to Go](https://www.toogoodtogo.com/en-us) allows restaurants or grocery stores to sell surplus “surprise bags” at discounted prices. In the same vein, [Flashfood](https://flashfood.com/) partners with grocery stores and lists deals for food approaching their best-by dates. [Misfits Market](https://www.misfitsmarket.com/) offers a grocery delivery program for “ugly produce” and other imperfect items.

    * **Upcycling**: this means transforming surplus food into innovative products! [Renewal Mill](https://www.renewalmill.com/) converts okara, the pulp from soymilk processing, into a low carb flour. Regrained (now [Upcycled Food Lab](https://upcycledfoods.com/ingredients/)) converts the spent grain from brewing beer into powder, to add to snack bars or sourdough.

{{% /dropdown %}}

## Final Thoughts and Resources 

It’s easy to forget about the food we lose or waste once it reaches the garbage bin (or ideally the compost bin). My hope, though, is that the above information convinces us that food loss and waste isn’t an issue we can ignore, and that we have low-hanging fruit to address it.

If you’d like to learn more about the high level issue:

* ReFED provides an [overview](https://refed.org/food-waste/the-problem) of loss and waste in the United States, and their [Insights Engine](https://insights.refed.org/) features a solutions database and policy finder for in the United States
* Food and Agriculture Organization (FAO) of the United Nations discusses the worldwide problem in their reports [here](https://www.fao.org/4/mb060e/mb060e00.pdf) and [here](https://openknowledge.fao.org/server/api/core/bitstreams/11f9288f-dc78-4171-8d02-92235b8d7dc7/content), including breakdown by food category and geographic region.

A thank you to John McIntosh for providing feedback and to everyone who’s put up with my advocacy over the years!

[^1]: According to [FAO](https://www.fao.org/platform-food-loss-waste/food-loss/introduction/en), *food waste* is "the decrease in the quantity or quality of food resulting from decisions and actions by retailers, food services, and consumers." *Food loss* results from decisions and actions earlier in the food supply chain.