type QuestType = "main" | "side" | "unmarked" | "repeatable";

type QuestData = {
  name: string
  type: QuestType
  location: string
  acquired: string
  available?: string
}
