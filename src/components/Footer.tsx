import { Heart, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0475 29 01 12</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rue de la Brasserie 20, 1367 Autre-Église</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Horaires</h3>
            <div className="space-y-1 text-muted-foreground text-sm">
              <p>Lundi - Vendredi: 8h30 - 17h</p>
              <p>Mercredi: 8h30 - 12h</p>
              <p className="text-xs mt-2">Fermé les jours fériés et vacances scolaires</p>
            </div>
          </div>

          {/* Le Ludus */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Le Ludus</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Un lieu de vie unique pour les enfants de 0 à 8 ans, inspiré par la pédagogie Montessori.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
            <span>Créé avec</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>pour Le Ludus © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;