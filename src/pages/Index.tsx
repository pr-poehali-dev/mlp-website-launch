import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type Section = 'home' | 'characters' | 'stories';

const ponies = [
  {
    name: 'Искорка',
    color: 'from-purple-400 via-pink-400 to-purple-600',
    description: 'Принцесса дружбы, любит учиться и читать книги',
    talent: 'Магия',
    emoji: '✨'
  },
  {
    name: 'Радуга Дэш',
    color: 'from-blue-400 via-cyan-400 to-blue-600',
    description: 'Самая быстрая пони в Эквестрии',
    talent: 'Скорость',
    emoji: '⚡'
  },
  {
    name: 'Пинки Пай',
    color: 'from-pink-400 via-rose-400 to-pink-600',
    description: 'Веселая и энергичная, обожает вечеринки',
    talent: 'Радость',
    emoji: '🎉'
  },
  {
    name: 'Флаттершай',
    color: 'from-yellow-300 via-green-300 to-teal-400',
    description: 'Добрая и заботливая, любит животных',
    talent: 'Доброта',
    emoji: '🦋'
  },
  {
    name: 'Рарити',
    color: 'from-purple-300 via-blue-300 to-indigo-400',
    description: 'Модельер с безупречным вкусом',
    talent: 'Щедрость',
    emoji: '💎'
  },
  {
    name: 'Эпплджек',
    color: 'from-orange-400 via-amber-400 to-yellow-500',
    description: 'Честная и трудолюбивая фермерша',
    talent: 'Честность',
    emoji: '🍎'
  }
];

const stories = [
  {
    title: 'Магия дружбы',
    excerpt: 'История о том, как шесть пони объединились, чтобы победить древнее зло...',
    gradient: 'from-purple-500 to-pink-500',
    icon: '✨'
  },
  {
    title: 'Приключения в Понивилле',
    excerpt: 'Веселые истории из жизни маленького городка, полного волшебства...',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🏰'
  },
  {
    title: 'Праздник единства',
    excerpt: 'Когда все пони собираются вместе, случаются настоящие чудеса...',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🎊'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-200 magic-glow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold gradient-text">My Little Pony</h1>
            <div className="flex gap-2">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="sparkle"
              >
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'characters' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('characters')}
                className="sparkle"
              >
                <Icon name="Users" className="mr-2 h-4 w-4" />
                Персонажи
              </Button>
              <Button
                variant={activeSection === 'stories' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('stories')}
                className="sparkle"
              >
                <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                Истории
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4">
        {activeSection === 'home' && (
          <div className="container mx-auto">
            <section className="text-center mb-16 animate-fade-in">
              <div className="inline-block mb-6 animate-float">
                <div className="text-9xl">🦄</div>
              </div>
              <h2 className="text-6xl font-extrabold mb-6 gradient-text animate-shimmer bg-[length:200%_auto]">
                Добро пожаловать в Понивилль!
              </h2>
              <p className="text-xl text-purple-700 max-w-2xl mx-auto mb-8 animate-fade-in">
                Волшебный мир, где дружба — это настоящая магия, а каждый день приносит новые приключения!
              </p>
              <div className="flex gap-4 justify-center animate-scale-in">
                <Button
                  size="lg"
                  onClick={() => setActiveSection('characters')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 magic-glow text-lg px-8"
                >
                  Познакомиться с героями
                  <Icon name="Sparkles" className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setActiveSection('stories')}
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8"
                >
                  Читать истории
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in">
              {[
                { icon: 'Heart', title: 'Дружба', desc: 'Сила настоящей дружбы', color: 'from-pink-400 to-rose-500' },
                { icon: 'Sparkles', title: 'Магия', desc: 'Волшебство повсюду', color: 'from-purple-400 to-indigo-500' },
                { icon: 'Rainbow', title: 'Радость', desc: 'Каждый день — праздник', color: 'from-blue-400 to-cyan-500' }
              ].map((feature, i) => (
                <Card key={i} className="sparkle border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/90">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 magic-glow`}>
                      <Icon name={feature.icon as any} className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'characters' && (
          <div className="container mx-auto animate-fade-in">
            <h2 className="text-5xl font-extrabold text-center mb-4 gradient-text">Герои Понивилля</h2>
            <p className="text-center text-purple-600 mb-12 text-lg">Познакомься с удивительными пони и их талантами</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {ponies.map((pony, i) => (
                <Card key={i} className="sparkle overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/95">
                  <div className={`h-32 bg-gradient-to-r ${pony.color} relative`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl animate-float">
                      {pony.emoji}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{pony.name}</CardTitle>
                    <CardDescription className="text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium">
                        {pony.talent}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{pony.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'stories' && (
          <div className="container mx-auto max-w-4xl animate-fade-in">
            <h2 className="text-5xl font-extrabold text-center mb-4 gradient-text">Волшебные истории</h2>
            <p className="text-center text-purple-600 mb-12 text-lg">Удивительные приключения из мира Эквестрии</p>
            <div className="space-y-6">
              {stories.map((story, i) => (
                <Card key={i} className="sparkle overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white/95">
                  <div className="flex">
                    <div className={`w-24 flex-shrink-0 bg-gradient-to-br ${story.gradient} flex items-center justify-center text-5xl`}>
                      {story.icon}
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-2xl">{story.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{story.excerpt}</p>
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          Читать далее
                          <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white/80 backdrop-blur-lg border-t border-purple-200 py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-purple-600 font-medium">
            ✨ Дружба — это магия! ✨
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 My Little Pony. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
