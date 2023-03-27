import work1 from '../../resources/img/work1.png';
import work2 from '../../resources/img/work2.png';
import '../howWork/HowWork.css'

const HowWork = () => {
    return(
        <div className="how_i_work">
        <div className=" _container">
            <div>
                <h2 className="how_i_work_title">
                    Как я работаю ?
                </h2>   
                <div className="how_i_work_inf">
                    <div className="how_i_work_t">
                        <h4>🌕 Телесная терапия</h4>
                        <p className="how_i_work_text">Самый любимый мой инструмент - телесная терапия. Вы приходите с любой болью, вопросом, и мы через связку психики и тела находим истоки проблемы. Возвращаемся 
                            в травмирующую ситуацию и там меняем шаблон реагирования, выражаем эмоции, плачем, смеемся и тело отпускает. 
                            Ситуация прорабатывается глубоко, поэтому результаты ощутимые.</p>
                        <h4>🌖 Психосоматика </h4>
                        <p className="how_i_work_text"> Вы приходите с симптомом-прыщи, лишний вес, киста, ячмень, гастрит, бронхит, головные боли и тд. Находим какая жизненная ситуация и повторяющиеся эмоции, которым не даете экологичного выхода влияют на формирования этого заболевания. Учимся реагировать по другому, даем выход эмоциям на консультации для того, чтобы ускорить выздоровление.</p>
                        <h4>🌗 Метафорические карты</h4>
                        <p className="how_i_work_text"> Также можем работать с метафорическими картами, если любите динамичную, легкую работу. Подходит для поиска ответов на сложные ситуации. Помогает найти настоящие причины, мозг отключает анализ и позволяет психике раскрыться.</p>
                    </div>
                    <img className="how_i_work_img" src={work1} alt=""/>

                </div>  

                    <div className="how_i_work_inf _work_img2">
                        <img className="how_i_work_img"  src={work2} alt=""/>
                        <div className="how_i_work_t">
                            <h4>🌘 Коучинг ICTA</h4>
                            <p className="how_i_work_text"> Еще я сертифицирована по международным стандартам кручинна ICTA. С этими инструментами мы работает с созависимыми отношениями, признаем свою тень, 
                                все что вытесняем, скрываем о себе, постановка целей, определиться, выбрать правильное решение. Трансформировать эмоцию, если сильно накрыло после конфликта или проблемы и не отпускает.</p>
                            <h4>🌑 Эфирные масла</h4>
                            <p className="how_i_work_text">Могу подобрать эфирные масла. Они воздействуют на лимбическую систему, когда мы еще были совсем древние, обоняние было жизненно важно, поэтому, все что касается запахов, воздействует быстро и бессознательно. Например прописываем схему. 
                                Вы ежедневно вдыхаете определение места на протяжении примерно месяца. 
                                Масло в зависимости от вашей задачи-не хватает уверенности, расслабиться, сосредоточиться, стать более женственной, простить папу/маму, снизить тревогу и ид.</p>
                      
                        </div>
                    </div>

            </div>
        </div>
    </div>
    )
}

export default HowWork;