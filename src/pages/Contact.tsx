import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CreditCard } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact & Accès
          </h1>
          <p className="text-xl text-muted-foreground">
            Toutes les informations pour nous rejoindre
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  Nous contacter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Téléphone</p>
                    <p className="text-lg text-primary font-medium">0475 29 01 12</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      Rue de la Brasserie 20<br />
                      1367 Autre-Église<br />
                      Brabant Wallon, Belgique
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-primary" />
                  Horaires d'ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Lundi - Mardi</span>
                    <span className="text-primary font-medium">8h30 - 17h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Mercredi</span>
                    <span className="text-primary font-medium">8h30 - 12h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Jeudi - Vendredi</span>
                    <span className="text-primary font-medium">8h30 - 17h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Weekend</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Fermetures :</strong> Jours fériés, vacances scolaires, 
                    et trois semaines de vacances à Noël.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Informations bancaires */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-3 h-6 w-6 text-primary" />
                  Informations bancaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">ASBL Le Ludus</p>
                    <p className="text-muted-foreground">Numéro de compte :</p>
                    <p className="text-lg font-mono bg-muted/50 p-2 rounded">
                      BE XX XXXX XXXX XXXX
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Le numéro de compte sera communiqué lors de l'inscription
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carte et directions */}
          <div className="space-y-6">
            {/* Carte Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle>Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.3!2d4.5!3d50.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQyJzAwLjAiTiA0wrAzMCcwMC4wIkU!5e0!3m2!1sfr!2sbe!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation du Ludus"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Directions */}
            <Card>
              <CardHeader>
                <CardTitle>Comment nous trouver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🚗 En voiture</h4>
                  <p className="text-sm text-muted-foreground">
                    Parking disponible sur place. Accès facile depuis la N4 et les principales routes du Brabant Wallon.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🚌 En transport en commun</h4>
                  <p className="text-sm text-muted-foreground">
                    Lignes de bus desservant Autre-Église. Arrêt à proximité de l'école.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">🚶 À pied / À vélo</h4>
                  <p className="text-sm text-muted-foreground">
                    Environnement résidentiel calme, idéal pour les déplacements à pied ou à vélo.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Planifier une visite
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous serions ravis de vous accueillir et de vous faire découvrir 
                  notre environnement unique.
                </p>
                <Button size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Prendre rendez-vous
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;