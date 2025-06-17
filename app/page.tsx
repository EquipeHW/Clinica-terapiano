import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Heart,
  Brain,
  Users,
  Award,
  Star,
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  BookOpen,
  Target,
  Activity,
  Utensils,
  Music,
  GraduationCap,
  Shield,
  Clock,
  CheckCircle,
  Stethoscope,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClinicaTerapiandoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              
              <div>
                <Image
                  src="/terapianologo.png"
                  alt="Clínica Terapiando"
                  width={130}
                  height={50}
                  className="h-auto"
                />
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-gray-600 hover:text-[#6A1B9A] transition-colors font-medium">
                Início
              </Link>
              <Link href="#servicos" className="text-gray-600 hover:text-[#6A1B9A] transition-colors font-medium">
                Serviços
              </Link>
              <Link href="#sobre" className="text-gray-600 hover:text-[#6A1B9A] transition-colors font-medium">
                Sobre
              </Link>
              <Link href="#depoimentos" className="text-gray-600 hover:text-[#6A1B9A] transition-colors font-medium">
                Depoimentos
              </Link>
              <Link href="#contato" className="text-gray-600 hover:text-[#6A1B9A] transition-colors font-medium">
                Contato
              </Link>
            </nav>

            <Button className="bg-[#6A1B9A] hover:bg-purple-700 text-white font-medium">
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#FBC02D] rounded-full opacity-10"></div>
        <div className="absolute top-32 right-32 w-12 h-12 bg-[#6A1B9A] rotate-45 opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#388E3C] rounded-full opacity-10"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-[#D32F2F] rotate-45 opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#6A1B9A]/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
                  <span className="text-[#6A1B9A] font-medium text-sm">
                    Primeira clínica especializada em Simões Filho
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
                  Cuidado Especializado para o<span className="text-[#6A1B9A]"> Desenvolvimento Infantil</span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Atendimento multiprofissional para crianças neurodivergentes com base científica e muito carinho.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#6A1B9A] hover:bg-purple-700 text-white font-medium px-8 py-4">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
                >
                  Conhecer Serviços
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#333333]">8+</div>
                  <div className="text-sm text-gray-500">Especialidades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#333333]">100+</div>
                  <div className="text-sm text-gray-500">Famílias atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#333333]">5★</div>
                  <div className="text-sm text-gray-500">Avaliação</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#6A1B9A]/5 to-[#1976D2]/5 rounded-3xl p-8">
                <Image
                  src="/terapiano1.png"
                  alt="Ambiente da Clínica Terapiando"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg mx-auto"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FBC02D] rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#388E3C] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
              <span className="text-gray-600 font-medium text-sm">Nossos Serviços</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">Tratamentos Especializados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Equipe multiprofissional dedicada ao desenvolvimento integral de cada criança
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-[#D32F2F]/10 rounded-2xl flex items-center justify-center">
                    <Brain className="h-8 w-8 text-[#D32F2F]" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D32F2F] rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-[#333333] font-semibold">Terapia ABA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Análise do Comportamento Aplicada para desenvolvimento de habilidades sociais e comunicativas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-[#388E3C]/10 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-[#388E3C]" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#388E3C] rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-[#333333] font-semibold">Fonoaudiologia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Desenvolvimento da comunicação, linguagem e habilidades de fala
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-[#1976D2]/10 rounded-2xl flex items-center justify-center">
                    <Activity className="h-8 w-8 text-[#1976D2]" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#1976D2] rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-[#333333] font-semibold">Fisioterapia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Desenvolvimento motor, coordenação e reabilitação física
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            {/* Geometric decorations */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-[#FBC02D]/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#6A1B9A]/20 rotate-45"></div>

            <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">Outros Serviços Especializados</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#388E3C]/10 rounded-lg flex items-center justify-center">
                  <Utensils className="h-5 w-5 text-[#388E3C]" />
                </div>
                <span className="text-gray-700 font-medium">Nutrição</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-[#D32F2F]" />
                </div>
                <span className="text-gray-700 font-medium">Psicologia</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#6A1B9A]/10 rounded-lg flex items-center justify-center">
                  <Music className="h-5 w-5 text-[#6A1B9A]" />
                </div>
                <span className="text-gray-700 font-medium">Musicoterapia</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#1976D2]/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-[#1976D2]" />
                </div>
                <span className="text-gray-700 font-medium">Psicopedagogia</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#FBC02D]/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-[#333333]" />
                </div>
                <span className="text-gray-700 font-medium">Educação Física</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#388E3C]/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#388E3C]" />
                </div>
                <span className="text-gray-700 font-medium">Terapia Ocupacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#6A1B9A]/10 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
              <span className="text-[#6A1B9A] font-medium text-sm">Nossos Diferenciais</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
              Por que escolher a Clínica Terapiando?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#6A1B9A]/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#6A1B9A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Pioneirismo Regional</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Primeira clínica especializada em autismo de Simões Filho
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#D32F2F]" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Equipe Multiprofissional</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Profissionais especializados trabalhando de forma integrada
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#388E3C]/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#388E3C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Ambiente Seguro</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Espaço projetado especialmente para crianças</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#1976D2]/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-[#1976D2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Tratamento Personalizado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Planos terapêuticos individualizados</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#FBC02D]/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#333333]" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Acompanhamento Contínuo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Monitoramento constante do desenvolvimento</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#6A1B9A]/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#6A1B9A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Suporte Familiar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Orientação e apoio para toda a família</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-[#6A1B9A]/5 rounded-3xl p-8">
                <Image
                  src="/terapiano2.png"
                  alt="Ambiente de atendimento da Clínica Terapiando"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-sm"
                />
                {/* Geometric decorations */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FBC02D] rounded-lg rotate-12"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#388E3C] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
                <span className="text-gray-600 font-medium text-sm">Sobre Nós</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] leading-tight">
                Cuidado Especializado com
                <span className="text-[#6A1B9A]"> Base Científica</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-[#333333]">Clínica Terapiando</strong> é pioneira no atendimento
                  especializado para crianças neurodivergentes em Simões Filho, oferecendo tratamentos baseados em
                  evidências científicas.
                </p>
                <p>
                  Nossa equipe multiprofissional trabalha de forma integrada, sempre respeitando a individualidade e o
                  potencial único de cada criança.
                </p>
                <p>
                  Acreditamos que cada criança merece um ambiente acolhedor e profissional para desenvolver suas
                  habilidades da melhor forma possível.
                </p>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#388E3C]" />
                  <span className="text-sm text-gray-600">Equipe especializada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#388E3C]" />
                  <span className="text-sm text-gray-600">Tratamento baseado em evidências</span>
                </div>
              </div>

              <Button className="bg-[#6A1B9A] hover:bg-purple-700 text-white font-medium">Conhecer Nossa Equipe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
              <span className="text-gray-600 font-medium text-sm">Depoimentos</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">O que dizem as famílias</h2>
            <p className="text-lg text-gray-600">Histórias reais de desenvolvimento e crescimento</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6A1B9A] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333]">Maria Silva</h4>
                    <p className="text-sm text-gray-500">Mãe do João, 6 anos</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "A equipe da Clínica Terapiando é excepcional. O João evoluiu muito desde que começou o tratamento. O
                  ambiente é acolhedor e os profissionais são muito dedicados."
                </blockquote>
                <div className="flex text-[#FBC02D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">C</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333]">Carlos Santos</h4>
                    <p className="text-sm text-gray-500">Pai da Ana, 4 anos</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "O atendimento é personalizado e a Ana se sente muito à vontade. Os resultados são visíveis e isso nos
                  dá muita esperança e alegria."
                </blockquote>
                <div className="flex text-[#FBC02D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#388E3C] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333]">Ana Costa</h4>
                    <p className="text-sm text-gray-500">Mãe do Pedro, 7 anos</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "Profissionais excepcionais! O Pedro desenvolveu habilidades que não imaginávamos. Recomendo de
                  coração para outras famílias."
                </blockquote>
                <div className="flex text-[#FBC02D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
              <span className="text-gray-600 font-medium text-sm">FAQ</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600">Esclarecemos suas principais dúvidas</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-50 rounded-xl border-0 px-6">
                <AccordionTrigger className="py-4 text-left font-semibold text-[#333333] hover:text-[#6A1B9A] hover:no-underline">
                  Quais idades vocês atendem?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                  Atendemos crianças de todas as idades, desde bebês até adolescentes. Nossa equipe adapta os
                  tratamentos conforme a faixa etária e necessidades específicas de cada criança.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-50 rounded-xl border-0 px-6">
                <AccordionTrigger className="py-4 text-left font-semibold text-[#333333] hover:text-[#6A1B9A] hover:no-underline">
                  Como funciona a primeira consulta?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                  Na primeira consulta, realizamos uma avaliação completa da criança, conversamos com os pais sobre o
                  histórico e elaboramos um plano de tratamento personalizado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-50 rounded-xl border-0 px-6">
                <AccordionTrigger className="py-4 text-left font-semibold text-[#333333] hover:text-[#6A1B9A] hover:no-underline">
                  Os pais participam do tratamento?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                  Sim! A participação da família é fundamental. Oferecemos orientação e treinamento para que os pais
                  possam dar continuidade ao trabalho terapêutico em casa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-50 rounded-xl border-0 px-6">
                <AccordionTrigger className="py-4 text-left font-semibold text-[#333333] hover:text-[#6A1B9A] hover:no-underline">
                  Quanto tempo dura o tratamento?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                  O tempo varia para cada criança. Alguns casos mostram progresso em poucos meses, outros precisam de
                  acompanhamento mais longo. Avaliamos constantemente os resultados.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#6A1B9A] rounded-full"></div>
              <span className="text-gray-600 font-medium text-sm">Contato</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">Estamos aqui para ajudar sua família</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#388E3C]/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#388E3C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333]">Telefone</h3>
                  <p className="text-gray-600">(71) 98801-6841</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#1976D2]/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#1976D2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333]">Email</h3>
                  <p className="text-gray-600">clinicaterapiando@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#D32F2F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333]">Endereço</h3>
                  <p className="text-gray-600">
                    R. Francisco Almeida, 156
                    <br />
                    Centro - Simões Filho/BA
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Horários de Funcionamento</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Segunda a Sexta:</span>
                  <span className="font-medium text-[#333333]">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="font-medium text-[#333333]">8h às 12h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="font-medium text-[#333333]">Fechado</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button className="w-full bg-[#6A1B9A] hover:bg-purple-700 text-white font-medium">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </Button>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
              <Image
                  src="/terapianologo.png"
                  alt="Clínica Terapiando"
                  width={130}
                  height={50}
                  className="h-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Primeira clínica especializada em desenvolvimento infantil para neurodivergentes de Simões Filho - BA
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>(71) 98801-6841</p>
                <p>clinicaterapiando@gmail.com</p>
                <p>Centro - Simões Filho/BA</p>
              </div>
            </div>

         

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#1976D2] transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#D32F2F] transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#1976D2] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>


            <div>
                <h4 className="text-lg font-semibold mb-4">Desenvolvido por</h4>
                  <Image
                  src="/logo02.png"
                  alt="Clínica Terapiando"
                  width={180}
                  height={50}
                  className="h-auto"
                />
              </div>
          </div>

            
         

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Clínica Terapiando. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
