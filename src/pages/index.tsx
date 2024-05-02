import React from 'react';
import Head from 'next/head';
import Container from '@components/Container';
import Layout from '@components/Layout';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import { Paragraph } from '~/shared/ui/Paragraph';

type Props = {};

const Index: React.FC<Props> = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Виталик Леонов</title>
          <meta property='og:title' content='Привет!' />
          <meta property='og:site_name' content='Виталик Леонов' />
          <meta property='og:description' content='Developing with ❤️' />
          <meta property='og:image' content='#' />
        </Head>
        <NavBar />
        <Container>
          <div>
            <Paragraph>
              Привет! 👋 Я Виталик, со-основатель и разработчик приложения Teem
            </Paragraph>
            <Paragraph>
              Перевожу продуктовые идеи в код. Управляю процессом разработки от
              обсуждения задачи до релиза.
            </Paragraph>
            <Paragraph>
              На протяжении 7-ми лет я работал в продуктовой компании. За этот
              не маленький период времени я успел побыть в разных ролях.
              Занимался решением обыкновенных задач разработки. Управлял
              командой специалистов. Читал лекции и менторил сотрудников.
            </Paragraph>
            <Paragraph>
              Собираю личный опыт и транслирую его в этом блоге. Темы разные: от
              мыслей по какому-то поводу до важных фундаментальных знаний.
            </Paragraph>
            <Paragraph>
              Открыт к вопросам, предложениям и просто общению — пишите 😉
            </Paragraph>
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
