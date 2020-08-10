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
                <form id="report">
                    <div className="form-group">
                        <label htmlFor="name-product">Название товара:</label>
                        <input type="text" className="form-control" name="name-product" id="name-product" value={state.nameProduct} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="plan-face">Plan face:</label>
                        <input type="text" className="form-control" name="plan-face" id="plan-face" value={state.planFace ? state.planFace : 'Не указан'} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plan-shelf-number">Plan shelf number:</label>
                        <input type="text" className="form-control" name="plan-shelf-number" id="plan-shelf-number" value={state.planShelfNumber ? state.planShelfNumber : 'Не указан'} disabled />
                    </div>
                    {
                        fields.map(field => 
                        {
                            switch(field.key)
                            {
                                case 'price':
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="price">Цена:</label>
                                            <input type="password" className="form-control" id="price" placeholder="Цена"></input>
                                        </div>
                                    )
                                case 'price_with_card':
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="price-card">Цена по карте:</label>
                                            <input type="password" className="form-control" id="price-card" placeholder="Цена по карте"></input>
                                        </div>
                                    )
                                case 'face':
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="face">Фейс:</label>
                                            <input type="password" className="form-control" id="face" placeholder="Фейс"></input>
                                        </div>
                                    )
                                case 'comment': 
                                    return (
                                        <div className="form-group" key={field.key}>
                                            <label htmlFor="comment">Комментарий:</label>
                                            <input type="password" className="form-control" id="comment" placeholder="Комментарий"></input>
                                        </div>
                                    )
                                case 'additional_space':
                                    return (
                                        <div className="form-group form-check" key={field.key}>
                                            <input type="checkbox" className="form-check-input" id="additional-space"></input>
                                            <label className="form-check-label" htmlFor="additional-space">Наличие дополнительного места:</label>
                                        </div>
                                    )
                                case 'availability':
                                    return (
                                        <div className="form-group form-check" key={field.key}>
                                            <input type="checkbox" className="form-check-input" id="availability"></input>
                                            <label className="form-check-label" htmlFor="availability">Наличие товара:</label>
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