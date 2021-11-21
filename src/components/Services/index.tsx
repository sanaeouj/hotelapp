import React, { Component } from "react";
import CustomTitle from "../CustomTitle";

export default class Services extends Component<{}, IStateServices> {
  public readonly state: Readonly<IStateServices> = {
    services: [
      {
        title: "free cocktails",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "endless hiking",
        info: " Lorem It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
      {
        title: "free shuttles",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "strongest beers",
        info: "Lorem There are many variations of passages of Lorem Ipsum available, but the majority form.",
      },
    ],
  };

  public render() {
    const { services } = this.state;
    return (
      <section className="services">
        <CustomTitle title="services" />
        <div className="services-center">
          {services.map((item: Service, index: number) => {
            return (
              <article key={index} className="service">
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
