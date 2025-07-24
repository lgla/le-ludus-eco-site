import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Utensils, Droplets } from "lucide-react";
import childrenPony from "@/assets/children-pony.jpg";

const DailyLife = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Le quotidien au Ludus
          </h1>
          <p className="text-xl text-muted-foreground">
            Un cadre de vie pensé pour l'épanouissement de chaque enfant
          </p>
        </div>

        {/* L'environnement */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="mr-3 h-6 w-6 text-primary" />
                L'environnement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Un cadre naturel et chaleureux</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maison accueillante avec jardin spacieux</li>
                    <li>• Espaces intérieurs adaptés à chaque groupe d'âge</li>
                    <li>• Ambiance familiale et sécurisante</li>
                    <li>• Animaux sur place pour créer un lien avec la nature</li>
                    <li>• Mobilier et matériel à la taille des enfants</li>
                    <li>• Lumière naturelle dans tous les espaces</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground italic">
                    "Chaque détail de notre environnement est pensé pour favoriser l'autonomie, 
                    la curiosité et le bien-être des enfants. Du mobilier adapté aux espaces 
                    extérieurs naturels, tout concourt à créer un cadre optimal pour l'apprentissage."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Les activités */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Les activités</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Découvertes variées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🐴</span>
                      <div>
                        <h4 className="font-medium">Contact avec les animaux</h4>
                        <p className="text-sm text-muted-foreground">
                          Poneys, chiens, poules... pour développer l'empathie et le respect du vivant
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <h4 className="font-medium">Langues</h4>
                        <p className="text-sm text-muted-foreground">
                          Ouverture au multilinguisme dès le plus jeune âge
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🎵</span>
                      <div>
                        <h4 className="font-medium">Musique</h4>
                        <p className="text-sm text-muted-foreground">
                          Expression rythmique et mélodique pour développer la sensibilité
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <img 
                    src={childrenPony} 
                    alt="Enfants avec un poney"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-medium">Art</h4>
                    <p className="text-sm text-muted-foreground">
                      Créativité et expression artistique
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h4 className="font-medium">Psychomotricité</h4>
                    <p className="text-sm text-muted-foreground">
                      Développement corporel et coordination
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏊</span>
                  <div>
                    <h4 className="font-medium">Piscine</h4>
                    <p className="text-sm text-muted-foreground">
                      Activités aquatiques et bien-être
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-sage-green/10 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Sorties culturelles</h4>
                <p className="text-sm text-muted-foreground">
                  Découverte du patrimoine local et d'activités enrichissantes à l'extérieur
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Horaires et Repas */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Horaires */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-3 h-6 w-6 text-primary" />
                Horaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Semaine classique</h4>
                <p className="text-muted-foreground">Lundi, mardi, jeudi et vendredi</p>
                <p className="text-lg font-medium text-primary">8h30 - 17h</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-foreground">Mercredi</h4>
                <p className="text-lg font-medium text-primary">8h30 - 12h</p>
              </div>
              
              <Separator />
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Fermetures</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Jours fériés</li>
                  <li>• Vacances scolaires</li>
                  <li>• Trois semaines de vacances à Noël</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Repas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="mr-3 h-6 w-6 text-primary" />
                Repas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-sage-green/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">🌱 Lieu zéro-déchet</h4>
                <p className="text-sm text-muted-foreground">
                  Aucun plastique n'est admis pour préserver notre planète et la santé des enfants.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">Collation et goûter</h4>
                <p className="text-sm text-muted-foreground">
                  Chaque enfant apporte un fruit ou légume dans un ravier pour partager avec la communauté.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">Déjeuner</h4>
                <p className="text-sm text-muted-foreground">
                  Boîte à repas étiquetée. Pour les repas chauds, prévoir un lunch box isotherme.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Droplets className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Hydratation</h4>
                  <p className="text-sm text-muted-foreground">
                    Eau disponible toute la journée. Gourde personnelle ou biberon pour les plus petits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DailyLife;