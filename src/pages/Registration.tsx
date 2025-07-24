import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Euro, FileText, Users } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Inscription
          </h1>
          <p className="text-xl text-muted-foreground">
            Rejoignez notre communauté éducative
          </p>
        </div>

        {/* Message d'accueil */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-sage-green/10 to-warm-beige/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Users className="mx-auto h-12 w-12 text-primary mb-6" />
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                "Nous serons ravis d'échanger avec vous et de vous faire visiter notre lieu d'apprentissage"
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-2xl font-bold text-primary">0475 29 01 12</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tarifs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Euro className="mr-3 h-6 w-6 text-primary" />
                Participation financière
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8">
                <div className="text-4xl font-bold text-primary mb-4">500€</div>
                <p className="text-lg text-muted-foreground mb-6">par mois</p>
                
                <div className="bg-muted/50 p-6 rounded-lg text-left">
                  <h4 className="font-semibold text-foreground mb-3">Cette contribution inclut :</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Encadrement pédagogique personnalisé</li>
                    <li>• Matériel Montessori de qualité</li>
                    <li>• Activités variées (langues, musique, art...)</li>
                    <li>• Contact avec les animaux</li>
                    <li>• Environnement sécurisé et adapté</li>
                    <li>• Suivi individualisé de chaque enfant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processus d'inscription */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="mr-3 h-6 w-6 text-primary" />
                Processus d'inscription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Premier contact</h4>
                    <p className="text-sm text-muted-foreground">
                      Appelez-nous pour discuter des besoins de votre enfant
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visite du Ludus</h4>
                    <p className="text-sm text-muted-foreground">
                      Découvrez nos locaux et rencontrez notre équipe
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dossier d'inscription</h4>
                    <p className="text-sm text-muted-foreground">
                      Complétez le formulaire et fournissez les documents requis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Période d'adaptation</h4>
                    <p className="text-sm text-muted-foreground">
                      Intégration progressive pour le bien-être de votre enfant
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full" size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  Télécharger le formulaire d'inscription (PDF)
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Le formulaire PDF sera bientôt disponible
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informations complémentaires */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Informations importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-semibold text-foreground mb-2">Inscriptions ouvertes</h4>
                <p className="text-sm text-muted-foreground">
                  Pour la rentrée de septembre
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-semibold text-foreground mb-2">Places limitées</h4>
                <p className="text-sm text-muted-foreground">
                  Structure familiale à taille humaine
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-semibold text-foreground mb-2">Visite recommandée</h4>
                <p className="text-sm text-muted-foreground">
                  Découvrez notre environnement unique
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Prêt à nous rejoindre ?
              </h3>
              <p className="text-muted-foreground mb-6">
                N'hésitez pas à nous contacter pour toute question ou pour planifier une visite.
              </p>
              <Button size="lg" className="mr-4">
                <Phone className="mr-2 h-5 w-5" />
                Nous appeler
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;