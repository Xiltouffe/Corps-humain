function Aff_text (id)
{	
	var text = "";

	if (id) {
		switch (id)
		{
			case "epaule":
				text = "L'épaule :(nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans l'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";
			break;

			case "genou":
					text = "Le genou : est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l'os et fait en sorte que les surfaces de l'articulation glissent facilement les unes contre les autres.";
				
				break;

			case "cuisse":
				text = "La cuisse : est, chez l'homme, la partie du membre inférieur située entre la hanche et le genou. Elle est articulée sur le bassin à la partie supérieure et le genou à la partie inférieure, a une forme de cylindre et comporte un os central, le fémur, et une dizaine de muscles. La cuisse est reliée au tronc via la hanche en haut et à la jambe via le genou en bas. On lui décrit un squelette, une musculature, une vasculaisation et une innervation.";
                                break;

			case "cheville":
				text = "La cheville : ou cou-de-pied est l'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin.";
			break;

			case "poigne":
				text = "Le poignet : est une région du membre supérieur située entre la main et l'avant-bras, et contenant le carpe. Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d'adapter la capacité de flexion-extension maximale des doigts et de la préhension.";
			break;

			case "coude":
				text = "Le coude : (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.";
			break;

			default :
			break;
		}
		document.getElementById ("description").innerHTML = text;
	}
}	