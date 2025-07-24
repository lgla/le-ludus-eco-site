import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Users, Target } from "lucide-react";

const Donations = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soutenez l'éducation Montessori
          </h1>
          <p className="text-xl text-muted-foreground">
            Investissez dans l'avenir de nos enfants
          </p>
        </div>

        {/* Message principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-sage-green/10 to-warm-beige/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Heart className="mx-auto h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Soutenez l'éducation Montessori, investissez dans l'avenir de vos enfants !
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  L'éducation est la clé de l'avenir. Elle permet à chaque enfant de développer pleinement son potentiel. Elle encourage la compréhension, la tolérance et la paix. Elle ouvre des portes, crée des opportunités, et transforme des vies.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Maria Montessori a commencé son travail dans les quartiers populaires de Rome, avec la volonté de rendre cette pédagogie accessible à tous. Aujourd'hui, malheureusement, la réalité est bien différente. Le Ludus ne reçoit aucun financement public, et son fonctionnement repose uniquement sur les participations financières des familles. Ces ressources, bien qu'essentielles, restent limitées.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  De nombreux enfants n'ont pas encore accès à une éducation respectueuse de leur rythme et de leurs besoins. Ensemble, nous pouvons changer cela, et permettre au Ludus de continuer à accueillir des enfants de tous milieux dans un environnement bienveillant et stimulant.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Si, comme nous, vous pensez que l'éducation est une priorité, et que la pédagogie Montessori peut être une réponse aux enjeux de demain, vous pouvez nous soutenir !
                </p>

                <p className="text-lg leading-relaxed">
                  Nous accueillons avec gratitude toutes formes de soutien.
                  Et si vous souhaitez faire un don financier, vous pouvez nous faire un virement en choisissant librement le montant de votre contribution.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Comment faire un don */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CreditCard className="mr-3 h-6 w-6 text-primary" />
                Comment faire un don
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-sage-green/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Virement bancaire</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Bénéficiaire :</p>
                    <p className="text-muted-foreground">ASBL Le Ludus</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Numéro de compte :</p>
                    <p className="text-lg font-mono bg-white p-2 rounded border">
                      BE XX XXXX XXXX XXXX
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Communication :</p>
                    <p className="text-lg font-mono bg-white p-2 rounded border">
                      DON LUDUS
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Faire un don maintenant
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Vous serez redirigé vers votre application bancaire
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact de votre don */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 h-6 w-6 text-primary" />
                L'impact de votre don
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                    €25
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Matériel pédagogique</h4>
                    <p className="text-sm text-muted-foreground">
                      Financement d'outils d'apprentissage Montessori
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                    €50
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Activités créatives</h4>
                    <p className="text-sm text-muted-foreground">
                      Soutien aux activités artistiques et musicales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                    €100
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Accessibilité</h4>
                    <p className="text-sm text-muted-foreground">
                      Aide à réduire les frais pour une famille dans le besoin
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                    €200
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Environnement</h4>
                    <p className="text-sm text-muted-foreground">
                      Amélioration des espaces extérieurs et du jardin
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-warm-beige/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Chaque contribution compte !</strong><br />
                  Quel que soit le montant, votre soutien fait la différence 
                  dans la vie de nos enfants.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Autres formes de soutien */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl justify-center">
                <Users className="mr-3 h-6 w-6 text-primary" />
                Autres formes de soutien
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-semibold text-foreground mb-2">Bénévolat</h4>
                  <p className="text-sm text-muted-foreground">
                    Partagez vos compétences et votre temps avec notre communauté
                  </p>
                </div>

                <div>
                  <div className="text-4xl mb-3">🎁</div>
                  <h4 className="font-semibold text-foreground mb-2">Dons en nature</h4>
                  <p className="text-sm text-muted-foreground">
                    Matériel éducatif, livres, jeux ou équipements utiles
                  </p>
                </div>

                <div>
                  <div className="text-4xl mb-3">📢</div>
                  <h4 className="font-semibold text-foreground mb-2">Parrainage</h4>
                  <p className="text-sm text-muted-foreground">
                    Entreprises et partenaires pour soutenir durablement nos projets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Remerciements */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="bg-primary/5">
            <CardContent className="p-8">
              <Heart className="mx-auto h-8 w-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Merci pour votre générosité
              </h3>
              <p className="text-muted-foreground">
                Grâce à votre soutien, nous pouvons continuer à offrir une éducation 
                de qualité basée sur les principes Montessori et rendre cette pédagogie 
                accessible au plus grand nombre.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donations;