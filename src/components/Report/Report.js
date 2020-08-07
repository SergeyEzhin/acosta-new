import React from 'react';

export const Report = (props) => 
{
    let state = props.location.state;

    if(state)
    {
        let fields = state.fields;
        return (
            <div className="container pt-4">
                <h1 className="text-center">Send report</h1>
                <p>Plan face: {state.planFace ? state.planFace : 'Не указан'}</p>
                <p>Plan shelf number: {state.planShelfNumber ? state.planShelfNumber : 'Не указан'}</p>
                <form id="report">
                    {
                        fields.map(field => 
                        {
                            switch(field.key)
                            {
                                case 'price':
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="price">Цена</label>
                                            <input type="password" className="form-control" id="price" placeholder="Цена"></input>
                                        </div>
                                    )
                                case 'price_with_card':
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="price-card">Цена по карте</label>
                                            <input type="password" className="form-control" id="price-card" placeholder="Цена по карте"></input>
                                        </div>
                                    )
                                case 'face':
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="face">Фейс</label>
                                            <input type="password" className="form-control" id="face" placeholder="Фейс"></input>
                                        </div>
                                    )
                                case 'comment': 
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="comment">Комментарий</label>
                                            <input type="password" className="form-control" id="comment" placeholder="Комментарий"></input>
                                        </div>
                                    )
                                case 'additional_space':
                                    return (
                                        <div className="form-group form-check" key={field.key}>
                                            <input type="checkbox" className="form-check-input" id="additional-space"></input>
                                            <label className="form-check-label" htmlFor="additional-space">Наличие дополнительного места</label>
                                        </div>
                                    )
                                case 'availability':
                                    return (
                                        <div className="form-group form-check" key={field.key}>
                                            <input type="checkbox" className="form-check-input" id="availability"></input>
                                            <label className="form-check-label" htmlFor="availability">Наличие товара</label>
                                        </div>
                                    )
                                default: 
                                    return null;
                            }
                        })
                    }
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
            </div>
        )
    }
}