import { Kafka, Producer } from 'kafkajs';

export default class KafkaProducer {
  #client: Kafka;
  #producer: Producer;

  constructor() {
    this.#client = new Kafka({
      clientId: '',
      brokers: []
    });

    this.#producer = this.#client.producer();
  }

  productMessage = async (topic: string, message: string | Buffer): Promise<void> => {
    await this.#producer.connect();
    await this.#producer.send({
      topic: topic,
      messages: [
        {
          value: message
        }
      ]
    });
    await this.#producer.disconnect();
  }
}
