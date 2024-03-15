import { NextApiRequest, NextApiResponse } from "next";
import { events } from "../../../../data/events";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.query;

  if (typeof eventId === "string") {
    const event = events.find((item) => item.id === eventId);
    const index = events.findIndex((item) => item.id === eventId);
    console.log(`Event: ${event}`);

    if (req.method === "GET") {
      return res.status(200).json(event);
    }
    if (req.method === "DELETE") {
      events.splice(index, 1);
      return res.status(200).json(events);
    }
    if (req.method === "PUT") {
      if (index !== -1) {
        events[index] = { ...events[index], title: req.body.event };
        return res.status(200).json(events[index]);
      } else {
        return res.status(404).json({ message: "Event not found" });
      }
    }
  }
}
