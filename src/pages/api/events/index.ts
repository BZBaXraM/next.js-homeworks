import { NextApiRequest, NextApiResponse } from "next";
import { events } from "../../../../data/events";
import { Event } from "@/types/event";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | Event>
) {
  if (req.method === "GET") {
    return res.status(200).json(events);
  }
  if (req.method === "POST") {
    console.log(`req-body: ${req.body.events}`);
    const newEvent = {
      id: Date.now().toString(),
      title: req.body.event,
      description: "some",
      category: "some",
    };

    events.push(newEvent);

    res.status(201).json(newEvent);
  }
}
