<script setup>
import blurbItem from '../components/blurbItem.vue';
import bPic from '../assets/gumite.logo.png'
import soupImg from '../assets/img/soup.jpg'
import doughImg from '../assets/img/dough.jpg'
import mushroomsImg from '../assets/img/mushrooms.jpg'


// const pictureUrl = '../assets/gumite.logo.png'
</script>
<template>
    <div class="">
            <blurbItem :picturePath="bPic" :pictureHeight="24" :pictureWidth="24">
                <div>
                    Gumponents is a vue component framework. Is this just another generic component library? Probably. I use these components for sites I design. That's why it's free. Collaboration is the step forward and tool sharing is my choice.
                </div>
            </blurbItem>
        <blurbItem :picturePath="soupImg" :pictureHeight="24" :pictureWidth="36">
            <div>
                The most basic version starts as good chicken broth enriched with a purée of roasted tomatoes and onions, garnished with picked chicken meat and crunchy fried tortillas. For my version, I start by doctoring up some store-bought broth with a few aromatics and chicken bones (you can, of course, start with homemade broth and it'll be all the better). A 30-minute simmer is enough to lend the broth some extra body and flavor and to just-cook the chicken breast meat so that it remains tender and moist when you shred it.     
            </div>
        </blurbItem>
        <blurbItem :picturePath="doughImg" :pictureHeight="24" :pictureWidth="36">
            <div>
                If only pizza that good were also easy to make. Well, here's the good news: It is. This is the easiest pizza you will ever make. Seriously. All it takes is a few basic kitchen essentials, some simple ingredients, and a bit of patience.

                The way I see it, there are three basic difficulties most folks have with pizza:

                    Problem 1: Kneading. How long is enough? What motion do I use? And is it really worth the doggone effort?
                    Problem 2: Stretching. Once I've got that disk of dough, how do I get it into the shape of an actual pizza, ready to be topped?
                    Problem 3: Transferring. Okay, let's say I've got my dough made and perfectly stretched onto my pizza peel. How do I get it onto that stone in the oven without disturbing the toppings or having it turn into a misshapen blob?
                    
            </div>
        </blurbItem>
        <blurbItem :picturePath="mushroomsImg" :pictureHeight="24" :pictureWidth="36" :blurbFlow="false">
            <div>
                Maitake means "dancing mushroom" in Japanese, and its taxonomic name is Grifola frondosa. In Western cuisines, you may see it called hen of the woods (not to be confused with an entirely different orange and yellow edible mushroom called chicken of the woods), presumably because it looks like a ball of short gray feathers. In North America and Japan, maitake appear in the fall at the base of oak trees. Maitake is a polypore mushroom, which means that if you look on the underside, it will have tiny holes, rather than the gills common to other mushroom varieties. Like its fellow polypores, maitake must be eaten young, before they become too tough and woody. Batter up maitake for a tempting tempura, throw it on a pizza, or mix it with other sautéed mushrooms for a savory pasta sauce. One of my favorite ways to enjoy it, though, is cut into big chunks, seared or roasted with olive oil until the delicate ruffled edges crisp up and the core becomes meaty and tender. 
            </div>
        </blurbItem>
    </div>
</template>