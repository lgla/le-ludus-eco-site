import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Users, Heart } from "lucide-react";
import ludusExterior from "@/assets/ludus-exterior.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${ludusExterior})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-white/95 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-olive-green mb-6 italic">
              "Dans l'enfant se trouve le destin de l'avenir."
            </blockquote>
            <cite className="text-lg text-muted-foreground mb-8 block">
              — Maria Montessori
            </cite>
            
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Le Ludus
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Un lieu de vie unique pour les enfants de 0 à 8 ans,<br />
                inspiré par la pédagogie Montessori
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Nous contacter
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Heart className="mr-2 h-5 w-5" />
                  Découvrir le Ludus
                </Button>
              </Link>
              <Link to="/registration">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Users className="mr-2 h-5 w-5" />
                  S'inscrire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-gradient-to-b from-soft-cream to-warm-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos valeurs fondamentales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="font-semibold text-foreground mb-2">Respect & Confiance</h3>
                  <p className="text-sm text-muted-foreground">
                    Chaque enfant est respecté dans son individualité et son rythme unique.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🌱</div>
                  <h3 className="font-semibold text-foreground mb-2">Autonomie & Coopération</h3>
                  <p className="text-sm text-muted-foreground">
                    Développer l'indépendance tout en cultivant l'esprit d'équipe.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="font-semibold text-foreground mb-2">Plaisir d'apprendre</h3>
                  <p className="text-sm text-muted-foreground">
                    Cultiver la curiosité naturelle et l'amour de l'apprentissage.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🎨</div>
                  <h3 className="font-semibold text-foreground mb-2">Créativité</h3>
                  <p className="text-sm text-muted-foreground">
                    Encourager l'expression artistique et l'innovation personnelle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Activités */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Un environnement riche et stimulant
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Notre école offre une variété d'activités adaptées à chaque âge pour favoriser 
              le développement complet de l'enfant.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl">🐴</div>
                <p className="text-sm font-medium">Animaux</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">🌍</div>
                <p className="text-sm font-medium">Langues</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">🎵</div>
                <p className="text-sm font-medium">Musique</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">🎨</div>
                <p className="text-sm font-medium">Art</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">🧠</div>
                <p className="text-sm font-medium">Psychomotricité</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">🏊</div>
                <p className="text-sm font-medium">Piscine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;