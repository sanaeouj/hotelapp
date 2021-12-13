import React, { Component } from "react";
import CustomTitle from "../CustomTitle";

export default class Services extends Component<{}, IStateServices> {
  public readonly state: Readonly<IStateServices> = {
    services: [
      {
        title: "Cuisine gastronomique",
        info: "Entre grillades raffinées, barbecues sur la plage, recettes marocaines authentiques ou encore cuisine méditerranéenne.",
      },
      {
        title: "Buffets merveilleux ",
        info: " Au cœur du Resort ou aux bords de la piscine, nos buffets proposent les spécialités des grandes cuisines internationales.",
      },
      {
        title: "En direct du gril ",
        info: "Régalez-vous de bœuf Wagyu de qualité supérieure face à notre parcours de golf, d'un steak grillé à la plage ou encore d'un kebab fraîchement préparé..",
      },
     
    ],
  };



  public render() {
    const { services } = this.state;
    return (
      <section className="services">
        <CustomTitle title="services" text="" />
        <div className="services-center">
          {services.map((item: Service, index: number) => {
            return (
              <article key={index} className="service">
                <h5>{item.title}</h5>
                <h6>{item.info}</h6>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
