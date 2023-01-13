export default function List() {
    return (
        <div>
            <div class="topbar">
                <div class="topbar__logo">
                    <a href="/">
                        <img src="images/ui-chevron-left.svg" width="24" />
                        <img class="logo" src="images/logo-packmytrip.svg" width="160" />
                    </a>
                </div>

                <h2 class="topbar__title">Our packing suggestion</h2>
                <ul class="topbar__context">
                    <li><img src="images/icon-mini-calendar.svg" width="16" />context.trip_lenght days</li>
                    <li><img src="images/icon-mini-sun.svg" width="16" />context.temperature °C</li>
                    <li><img src="images/icon-mini-gender.svg" width="16" />context.gender | capitalize </li>
                </ul>
            </div>

            <main class="is-list">
                {/* for category in context.categories */}
                <div class="category__block">
                    <h3 class="category__name">category</h3>
                    <ul class="category__list">
                        {/* for product in context.result_backpack */}
                        {/* if product.category == category */}
                        <li class="product">
                            <div class="product__thumbnail">
                                <img src="images/products/{{product.image}}" />
                            </div>
                            <div class="product__text">
                                <h4 class="product__text__name"><span>product.qtd x</span> product.name</h4>
                                <p class="product__text__description">product.description</p>
                            </div>
                        </li>
                        {/* endif */}
                        {/* endfor */}

                        <li>
                            <hr />
                        </li>
                    </ul>
                </div>

                {/* endfor */}

            </main>
        </div>
    )
}