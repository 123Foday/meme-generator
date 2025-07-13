"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TwitterPicker } from "react-color";

const memeSuggestions = [
  "When the code finally works… and I don't know why",
  "What is I specilize on in CS",
  "404: Motivation not found.",
  "You vs the bug she told you not to worry about.",
  "How it started How it's going.",
  "Deploy on Friday? …Hold my coffee",
  "Me thinking of Learning React",
  "Me thinking of my best lecturer"
];

function getRandomSuggestions(count = 3) {
  return memeSuggestions
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}


export function TextOverlay({
  index,
  onUpdate,
}: {
  index: number;
  onUpdate: (
    index: number,
    text: string,
    x: number,
    y: number,
    bgColor?: string
  ) => void;
}) {
  const [textOverlay, setTextOverlay] = useState("");
  const [textOverlayXPosition, setTextOverlayXPosition] = useState(0);
  const [textOverlayYPosition, setTextOverlayYPosition] = useState(0);
  const [applyTextBackground, setApplyTextBackground] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [textBgColor, setTextBgColor] = useState("#FFFFFF");

  const xPositionDecimal = textOverlayXPosition / 100;
  const yPositionDecimal = textOverlayYPosition / 100;
  const bgColor = applyTextBackground
    ? textBgColor.replace("#", "")
    : undefined;


  useEffect(() => {
  setSuggestions(getRandomSuggestions());
  setHasMounted(true);
  }, []);

  useEffect(() => {
    onUpdate(
      index,
      textOverlay || " ",
      xPositionDecimal,
      yPositionDecimal,
      bgColor
    );
  }, [
    index,
    textOverlay,
    xPositionDecimal,
    yPositionDecimal,
    bgColor,
    onUpdate,
  ]);

  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between gap-8">
        <div className="flex-grow">
          <Label htmlFor={`textOverlay${index}`}>Text Overlay {index}</Label>
          <div className="mb-4">
              <p className="font-medium mb-2">Need inspiration? Try one of these:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setTextOverlay(s)} // Use your existing state handler
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          <Input
            id={`textOverlay${index}`}
            onChange={(e) => {
              setTextOverlay(e.target.value);
            }}
            value={textOverlay}
          />
        </div>
        <div className="flex items-center space-x-2 flex-col space-y-4">
          <div className="flex gap-4">
            <Checkbox
              checked={applyTextBackground}
              onCheckedChange={(v) => {
                setApplyTextBackground(v as boolean);
              }}
              id="terms"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Apply Text Background
            </label>
          </div>

          {applyTextBackground && (
            <TwitterPicker
              color={textBgColor}
              onChange={(value) => {
                setTextBgColor(value.hex);
              }}
            />
          )}

          {textBgColor}
        </div>
      </div>
      <div>
        <Label htmlFor={`text${index}XPosition`}>Text {index} X Position</Label>
        <Slider
          id={`text${index}XPosition`}
          value={[textOverlayXPosition]}
          onValueChange={([v]) => {
            setTextOverlayXPosition(v);
          }}
        />
      </div>
      <div>
        <Label htmlFor={`text${index}YPosition`}>Text {index} Y Position</Label>
        <Slider
          id={`text${index}YPosition`}
          value={[textOverlayYPosition]}
          onValueChange={([v]) => {
            setTextOverlayYPosition(v);
          }}
        />
      </div>
    </Card>
  );
}