import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import classroomInterior from "@/assets/classroom-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            À propos du Ludus
          </h1>
          <p className="text-xl text-muted-foreground">
            Une aventure pédagogique commencée en 2020
          </p>
        </div>

        {/* Histoire principale */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  C'est avec grande fierté et bonheur que je vous présente un projet de cœur qui s'est mis en place grâce au soutien d'un entourage très précieux. C'est une grande aventure qui a commencé en 2020…
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Le Ludus est une petite structure familiale du Brabant-Wallon, qui reçoit les enfants de 0 à 8 ans.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Le cadre bien défini de ce lieu de vie garantira la bienveillance, la sécurité, et l'enthousiasme nécessaires, dès le plus jeune âge, à tout apprentissage et développement de l'enfant.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Ma démarche est en grande partie influencée par les valeurs essentielles prônées par Maria Montessori : la confiance en soi, le respect, l'écoute, l'envie d'apprendre, la curiosité naturelle, l'autonomie, la créativité, l'esprit d'initiative, l'épanouissement, la solidarité, et encore bien d'autres qualités qui me sont chères.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Tout est confectionné et adapté à la hauteur et à la force des enfants. Ainsi des étagères mettent à leur disposition du matériel précis et réfléchi en libre accès, initiant aux domaines tels que le français, les mathématiques, la géographie, la biologie, mais également l'acquisition de toutes les actions de notre quotidien.
                </p>

                <p className="text-lg leading-relaxed">
                  J'y trouve donc un objectif à accomplir avec amour et intelligence, et cela prendra la forme d'une aide à la vie de l'enfant. Ludus veillera à aménager l'environnement, tant intérieur qu'extérieur, pour susciter et baliser l'éveil de l'enfant à de nombreuses réalités.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Photo et message personnel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div 
                  className="h-64 md:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${classroomInterior})` }}
                ></div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <blockquote className="text-xl italic text-foreground mb-4">
                    "Je me réjouis d'accueillir ce que vous avez de si précieux dans ce lieu chaleureux et unique."
                  </blockquote>
                  <cite className="text-right text-muted-foreground font-semibold">
                    — Emy
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sections supplémentaires */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pédagogie Montessori */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                La pédagogie Montessori
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">👩‍🏫 Qui était Maria Montessori ?</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      Maria Montessori (1870 – 1952) était une médecin et pédagogue italienne, pionnière de l'éducation moderne. Elle fut l'une des premières femmes médecins en Italie.
                    </p>
                    <p>
                      Très tôt, elle s'intéresse au développement des enfants, en particulier ceux en difficulté, et élabore une méthode pédagogique centrée sur l'observation, l'autonomie et le respect du rythme de chaque enfant. En 1907, elle fonde sa première "Casa dei Bambini" (Maison des Enfants) dans un quartier populaire de Rome. C'est là que commence véritablement l'aventure Montessori.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">🌱 Les grands principes de la pédagogie Montessori</h4>
                  <p className="text-sm mb-4">La méthode repose sur plusieurs fondamentaux :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-foreground">1. L'autonomie</strong><br />
                      L'enfant est naturellement curieux. On lui donne les outils pour explorer, choisir, faire seul. On l'invite à être acteur de ses apprentissages, pas seulement récepteur.
                    </div>
                    <div>
                      <strong className="text-foreground">2. Le respect du rythme de l'enfant</strong><br />
                      Chaque enfant apprend à son propre rythme. Il n'y a pas de pression ni de comparaison avec les autres. L'éducateur observe et accompagne.
                    </div>
                    <div>
                      <strong className="text-foreground">3. L'environnement préparé</strong><br />
                      L'espace est soigneusement organisé, beau, simple et adapté à la taille de l'enfant. Tout le matériel est accessible et encourage l'indépendance.
                    </div>
                    <div>
                      <strong className="text-foreground">4. Le matériel sensoriel</strong><br />
                      Maria Montessori a conçu du matériel spécifique pour que les enfants puissent apprendre par la manipulation et l'expérimentation : perles pour les mathématiques, lettres rugueuses, cylindres de tailles variées, etc.
                    </div>
                    <div>
                      <strong className="text-foreground">5. La liberté encadrée</strong><br />
                      Les enfants choisissent librement leurs activités, dans un cadre clair. Cette liberté favorise la concentration, la motivation et l'auto-discipline.
                    </div>
                    <div>
                      <strong className="text-foreground">6. Le rôle de l'éducateur</strong><br />
                      L'éducateur/trice est un guide, pas un "professeur". Il/elle observe, soutient, encourage mais n'impose pas. Il/elle prépare l'environnement et intervient avec douceur.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">🧠 Ce que développe la pédagogie Montessori</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Confiance en soi</div>
                    <div>• Concentration</div>
                    <div>• Sens des responsabilités</div>
                    <div>• Respect des autres et de l'environnement</div>
                    <div>• Pensée logique et esprit critique</div>
                    <div>• Créativité</div>
                    <div>• Autonomie</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sections d'âge */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nos sections
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Maternelle (3-6 ans)</h4>
                  <p className="text-sm text-muted-foreground">
                    Développement de l'autonomie et des compétences sociales.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground">Primaire (6-8 ans)</h4>
                  <p className="text-sm text-muted-foreground">
                    Approfondissement des apprentissages fondamentaux.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lien vers Schola Nova */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-sage-green/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                La suite logique : Schola Nova
              </h3>
              <p className="text-muted-foreground mb-4">
                Pour poursuivre le parcours éducatif de votre enfant, découvrez Schola Nova, 
                notre partenaire pour l'enseignement secondaire.
              </p>
              <a 
                href="https://www.scholanova.be" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                En savoir plus sur Schola Nova →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;