import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Contáctanos</h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Hablemos sobre tu acceso a licitaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium">
                          Nombre
                        </label>
                        <input
                          id="firstName"
                          className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                          placeholder="Juan"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium">
                          Apellido
                        </label>
                        <input
                          id="lastName"
                          className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                          placeholder="Pérez"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                        placeholder="juan@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium">
                        Empresa
                      </label>
                      <input
                        id="company"
                        className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                        placeholder="Tu empresa"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                        placeholder="Cuéntanos cómo podemos ayudarte a acceder a más licitaciones..."
                      />
                    </div>

                    <div className="hover:scale-[1.02] active:scale-[0.98] transition duration-200">
                      <Button type="submit" className="w-full">
                        Enviar mensaje
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}