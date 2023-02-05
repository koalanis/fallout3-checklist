
export type QuestType = "main" | "side" | "unmarked";

type Discoverable = {
  found: boolean
}

type Completable = {
  done: boolean
}

type GameSection = "Main Game" | "Broken Steel" | "Point Lookout" | "Mothership Zeta" | "The Pitt" | "Operation: Anchorage"

type QuestMetadata = {
  questGroup?: string
  gameSection: string
}

type QuestArchetype = {
  name: string
  location?: string[]
  metadata?: QuestMetadata
}

export type MainQuest = QuestArchetype & Discoverable & Completable;
export type SideQuest = QuestArchetype & Discoverable & Completable;
export  type UnmarkedQuest = QuestArchetype & Discoverable & Completable;
export type RepeatableQuest = QuestArchetype & Discoverable;


type Findable = {
  found: boolean
}




export type Quest = MainQuest | SideQuest | UnmarkedQuest | RepeatableQuest;

type ItemType = "bobblehead" | "skillbook" | "rare" | "teddybear" |
                  "nukacolaquantum" | "alienlog" | "weapon" | "clothing";

type ItemInstanceScalar = Findable & {
  id: number
}

type WithLocation = {
  location: string
}

type WithName = {
  name: string
}

type ItemInstanceAtLocation = ItemInstanceScalar & WithLocation;

type NameableItemInstanceAtLocation = ItemInstanceScalar & WithLocation & WithName;

type ItemInstance = ItemInstanceScalar | ItemInstanceAtLocation | NameableItemInstanceAtLocation;

type HasMultipleInstances = {
  instances: ItemInstance[]
  total: number
}

type ItemArchetype = Completable & {
  name: string
}

type Bobblehead = ItemArchetype & WithLocation;
type Skillbook = ItemArchetype & HasMultipleInstances;
type Rare = ItemArchetype & HasMultipleInstances;
type AlienLogs = ItemArchetype;
type NukaColaQuantums = ItemArchetype & HasMultipleInstances;
type Clothing = ItemArchetype;
type Weapon = ItemArchetype;


type Item = Bobblehead | Skillbook | Rare | AlienLogs | NukaColaQuantums | Clothing | Weapon




export type Checklist = {
  quests: {
    [questType in QuestType]?: Quest[]
  },
  items: {
    [itemType in ItemType]: Item[]
  }
}