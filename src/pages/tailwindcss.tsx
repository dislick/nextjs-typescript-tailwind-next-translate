import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/layout';
import Faq from '../components/tailwindui/faq';
import ModalSmall from '../components/tailwindui/smallModal';

export const Tailwindcss = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div>
                <div className="bg-white shadow p-3 rounded lg:w-64">
                    <div>
                        <div className="bg-cover bg-center bg-gray-300 h-32 rounded" />
                    </div>
                    <div className="mt-6">
                        <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">Title</p>
                        <p className="text-sm text-gray-600 font-hairline">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mt-6">
                        <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                            Default
                        </button>
                    </div>
                </div>
            </div>
            <article className="py-10 prose lg:prose-xl">
                <h3>{t('tailwindcss:introduction')}</h3>
                <p>
                    For years parents have espoused the health benefits of eating garlic bread with
                    cheese to their children, with the food earning such an iconic status in our
                    culture that kids will often dress up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may be linked to a series
                    of rabies cases springing up around the country.
                </p>
            </article>
            <div className="py-10">
                <ModalSmall />
            </div>
            <div>
                <Faq />
            </div>
        </Layout>
    );
};

export default Tailwindcss;
