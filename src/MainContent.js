import React from 'react';



class MainContent extends React.Component {
    
    render(){
        return (
            <div className="App">
                <div>
                    <h3>Introduction</h3>
                    <p>How much money do you spend on food, or subscriptions? If you do then your like me, or you might just be
                        me! The point of the website is to make it easier to budget by projecting what your expenses should be within
                        the year.
                    </p>
                </div>
                <div>
                    <h3>How does it work</h3>
                    <p>This works by inputing your monthly income (after tax), and we will tell you how much money you will make in a year!
                        That's right it's like having your own calculator on a website, but with awesome graphs!
                    </p>
                </div>
                <div>
                    <h3>Learning How to Budget</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed varius lectus. Nunc ante dui, hendrerit et 
                        libero nec, accumsan cursus felis. Sed a auctor lorem. Phasellus porta dui eu convallis vulputate. Praesent malesuada
                    </p>
                </div>
            </div>
        );
    }
}

export default MainContent;